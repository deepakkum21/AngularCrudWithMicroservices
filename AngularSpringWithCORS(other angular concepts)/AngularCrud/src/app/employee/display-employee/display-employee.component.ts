import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { EmployeeModel } from '../../models/employee-model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpoloyeeService } from '../service/empoloyee.service';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: EmployeeModel;
  selectedEmployeeId: number;

  @Input() searchText: string;
  // call child component properties nad method using (a)@Output (b)template referernce
  // (A) @Output
  @Output()
  notify: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();

  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  private confirmDelete = false;
  private isHidden = true;

  // (B) #template ref varaiable at the place where selector tag is mentioned for child compenent give the #tem-ref name their

  // (2) change detection using PROPERTY SETTER
  // private _employee: EmployeeModel;

  // @Input()
  // set employee(val: EmployeeModel) {
  //   console.log('Previous Employee: ' + (this._employee ? this._employee.name : 'Null'));
  //   console.log('Current Employee: ' + val.name);
  //   this._employee = val;
  // }
  // get employee(): EmployeeModel {
  //   return this._employee;
  // }
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _employeeService: EmpoloyeeService,
    private myDialog: MatDialog) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.selectedEmployeeId);
  }
  // input change detection can be done using (1) OnChanges (2) property setter
  // ngOnChanges(changes: SimpleChanges) {
  //   // (1) Simple change object has three types of values (1)previousValue (2)currentValue (3)firstChange (4)isFirstChange
  //   console.log(changes);
  //   const empPreviousValue = <EmployeeModel>changes.employee.previousValue;
  //   const empCurrentvalue = <EmployeeModel>changes.employee.currentValue;

  //   console.log('Previous Employee: ' + (empPreviousValue ? empPreviousValue.name : 'Null'));
  //   console.log('Current Employee: ' + empCurrentvalue.name );
  // }

  // The ngOnChanges life cycle hook is invoked when any of the input properties change.
  // Each input property that has changed will be attached to the SimpleChanges object using the property name as the key.
  // So if you have 5 input properties, and if 3 out of those 5 properties change, then those 3 properties will be attached to the
  // SimpleChanges object using the property name as the key
  // (1) Sample showing key i.e. being attached for OnChanges life cycle hook
  // ngOnChanges(changes: SimpleChanges) {
  //   for (const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change ? change.previousValue : 'NULL');
  //     const to = JSON.stringify(change.currentValue );
  //     console.log('Changed Input property: ' + propName + ' from: ' + from + ' to: ' + to);
  //   }
  // }

  handleClick() {
    this.notify.emit(this.employee);
  }


  getEmpNameGenderUsingTemplateRef() {
    return this.employee.name + ' ' + this.employee.gender;
  }

  viewEmployee() {
    this._router.navigate(['/employee', this.employee.id], {
      queryParams: { 'searchText': this.searchText }

    });
  }

  editEmployee() {
    console.log('edit clicked');
    this._router.navigate(['/edit', this.employee.id]);
  }

  // for hardcoded
  // deleteEmployee() {
  //   this._employeeService.deleteEmployee(this.employee.id);
  //   this.notifyDelete.emit(this.employee.id);
  // }

  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      () => console.log(`employee with the id ${this.employee.id} deleted successfully`),
      (error) => console.log(error)
    );
    this.notifyDelete.emit(this.employee.id);
  }

  confirmDeleteAction() {
    this.confirmDelete = !this.confirmDelete;
    const dialogRef = this.myDialog.open(DeleteDialogComponent, {
      width: '600px',
      data: 'you want to delete'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the result: ' + result);
      if (result) {
        this.deleteEmployee();
      }
    });
  }
}
