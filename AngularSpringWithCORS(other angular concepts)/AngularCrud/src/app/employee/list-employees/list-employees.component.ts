import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee-model';
import { EmpoloyeeService } from '../service/empoloyee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedEmployeeList } from '../../models/resolved-employee-list';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employeesList: EmployeeModel[];
  employeeToShow: EmployeeModel;
  private employeeId = 1;
  notifyDataFromChild: EmployeeModel;

  private _searchText: string;
  error: string;

  public get searchText(): string {
    return this._searchText;
  }
  public set searchText(value: string) {
    this._searchText = value;
    this.filteredEmployeeList = this.filteredEmployee(value);
  }
  filteredEmployeeList: EmployeeModel[];

  constructor(private _employeeService: EmpoloyeeService, private _route: Router, private _activatedRoute: ActivatedRoute) {
    // (1) method of showing error changes w.r.t EmployeeListResolverService
    // const resolvedEmployeeList: ResolvedEmployeeList = this._activatedRoute.snapshot.data['employeeList'];
    // if (resolvedEmployeeList.error == null) {
    //   this.employeesList = resolvedEmployeeList.employeeList;
    // } else {
    //   this.error = resolvedEmployeeList.error;
    // }

    // (2) method for showing error
    const resolvedData: EmployeeModel[] | string = this._activatedRoute.snapshot.data['employeeList'];
    if (Array.isArray(resolvedData)) {
      this.employeesList = resolvedData;
    } else {
      this.error = resolvedData;
    }

    if (this._activatedRoute.snapshot.queryParamMap.has('searchText')) {
      this.searchText = this._activatedRoute.snapshot.queryParamMap.get('searchText');
    } else {
      this.filteredEmployeeList = this.employeesList;
    }
  }

  // no need to use codes of this since using route resolver in the constructor which is getting all data from the EmlpoyeeService
  // ngOnInit() {
  //   this._employeeService.getEmployeeList().subscribe((empList) => {
  //     this.employeesList = empList;
  //     if (this._activatedRoute.snapshot.queryParamMap.has('searchText')) {
  //       this.searchText = this._activatedRoute.snapshot.queryParamMap.get('searchText');
  //     } else {
  //       this.filteredEmployeeList = this.employeesList;
  //     }
  //   });

  // this.employeeToShow = this.employeesList[0];

  // console.log('QueryParamMap.get=> ' + this._activatedRoute.snapshot.queryParamMap.get('searchText'));
  // console.log('QueryParamMap.getAll=> ' + this._activatedRoute.snapshot.queryParamMap.getAll('searchText'));
  // console.log('QueryParamMap.has=> ' + this._activatedRoute.snapshot.queryParamMap.has('searchText'));
  // console.log('QueryParamMap.keys=> ' + this._activatedRoute.snapshot.queryParamMap.keys);

  // (1) retaining search text using SNAPSHOT queryParamMap
  // if (this._activatedRoute.snapshot.queryParamMap.has('searchText')) {
  //   this.searchText = this._activatedRoute.snapshot.queryParamMap.get('searchText');
  // } else {
  //   this.filteredEmployeeList = this.employeesList;
  // }

  // (2)retaining search text using SUBSCRIBE queryParamMap
  // this._activatedRoute.queryParamMap.subscribe(queryParam => {
  //   if (queryParam.has('searchText')) {
  //     this.searchText = queryParam.get('searchText');
  //   } else {
  //     this.filteredEmployeeList = this.employeesList;
  //   }
  // });


  ngOnInit(): void { }

  filteredEmployee(searchTerm: string) {
    if (searchTerm) {
      return this.employeesList.filter(employee => employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    } else {
      return this.employeesList;
    }
  }
  nextEmployee() {
    console.log('"next employee executed"');
    if (this.employeeId < 3) {
      this.employeeToShow = this.employeesList[this.employeeId];
      this.employeeId++;
    } else {
      this.employeeToShow = this.employeesList[0];
      this.employeeId = 1;
    }

  }

  changeEmployeeChange() {
    this.employeesList[0].name = 'Jordan';
    // have to create a new array that need to changed and need to pass assisgned to the employee list
    // const newEmployeeArray: EmployeeModel[] = Object.assign([], this.employeesList);
    // newEmployeeArray[0].name = 'Jordan';
    // this.employeesList = newEmployeeArray;
    this.filteredEmployeeList = this.filteredEmployee(this.searchText);
    // or
    // this.filteredEmployeeList = this.employeesList;
  }

  handleNotify(eventData: EmployeeModel) {
    this.notifyDataFromChild = eventData;
  }

  onClikForEmployeeDetail(employeeId: number) {
    this._route.navigate(['/employee', employeeId], {
      queryParams: { 'searchText': this.searchText, 'secondSearchTermTest': 'testValue' }

    });
  }

  onDeleteEmployeeNotification(empId: number) {
    const indexToBeDeleted = this.filteredEmployeeList.findIndex( emp => emp.id === empId);
    if (indexToBeDeleted !== -1) {
      this.filteredEmployeeList.splice(indexToBeDeleted, 1);
    }
  }
}
