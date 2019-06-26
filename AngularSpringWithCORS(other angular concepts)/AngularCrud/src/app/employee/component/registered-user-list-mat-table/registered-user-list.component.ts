import { Component, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { UserinfoService } from '../../service/userinfo.service';
import { UserInfoModel } from '../../../models/user-info-model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { RegisterUserDialogComponent } from '../../dialog/register-user-dialog/register-user-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-user-list',
  templateUrl: './registered-user-list.component.html',
  styleUrls: ['./registered-user-list.component.css']
})
export class RegisteredUserListComponent implements OnInit, AfterContentChecked {
  serialNo = 0;
  userInfoList: UserInfoModel[];
  dataSource: MatTableDataSource<UserInfoModel>;
  displayedColumns = ['select', 'index', 'fullName', 'userName', 'email'];
  selection = new SelectionModel(true, []);
  contentCheckCount = 0;
  userNameList: string[] = [];
  userNamePathVar = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _userInfoService: UserinfoService, private _myDialog: MatDialog, private confirmationSnackBar: MatSnackBar,
    private _router: Router) { }

  // ngOnInit() {
  //   this._userInfoService.getRegisteredUserList().subscribe((userList) => {
  //     this.userInfoList = userList;
  //     console.log('userInfolist:' + this.userInfoList);
  //     this.dataSource = new MatTableDataSource(this.userInfoList);
  //     this.dataSource.sort = this.sort;
  //   });

  // }
  ngOnInit() {
    this.loadTableData();
  }

  loadTableData() {
    this._userInfoService.getRegisteredUserList().then((data: UserInfoModel[]) => {
      console.log('userInfolist:' + data);
      this.userInfoList = data;
      this.dataSource = new MatTableDataSource(this.userInfoList);
    }).then(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('userInfolist1:' + this.userInfoList);
    });
    console.log('userInfolist:' + this.userInfoList);
  }

  // called after the default change detector has completed checking all content of a directive
  ngAfterContentChecked() {

  //   if (this.dataSource !== undefined && this.contentCheckCount < 1) {
  //     this.dataSource = new MatTableDataSource(this.userInfoList);
  //     console.log(this.sort);
  //     console.log(this.paginator);
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;
  //     this.contentCheckCount = 1;
  //     console.log(this.dataSource);
  //   }
  }

  applyFilter(filterValue: string) {
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClicked(rowData) {
    console.log('Row clicked: ', rowData);
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  editData() {
    console.log(this.selection.selected);
    if (this.selection.selected.length > 1) {
      alert('Please select only one record to edit');
    } else if (this.selection.selected.length === 1) {
      console.log('you acan edit: ' + this.selection.selected[0].userName);
      this._router.navigate(['/register', this.selection.selected[0].userName]);
    } else {
      alert('Please select records to Edit!!!! \n You haven\'t selected any record');
    }
  }

  onDelete() {
    console.log(this.selection.selected);
    const resultRecordNo = this.selection.selected.length;
    for (let i = 0; i < resultRecordNo; i++) {
      this.userNameList.push(this.selection.selected[i].userName);
      console.log('userName Array: ' + this.userNameList[i]);
      this.userNamePathVar = this.userNameList[i] + ',' + this.userNamePathVar;
      console.log('userNamePathVar: ' + this.userNamePathVar);
    }
    this.userNamePathVar = this.userNamePathVar.substring(0, this.userNamePathVar.length - 1);
    console.log('this.userNamePathVar: ' + this.userNamePathVar);
    if (resultRecordNo === 0) {
      alert('Please select records to Delete!!!! \n You haven\'t selected any record');
    } else if (resultRecordNo > 1) {
      alert('You are about to delete multiple records');
      this.confirmDelete();
    } else {
      console.log('you can delete');
      this.confirmDelete();
    }
  }

  confirmDelete(): any {
    const dialogRef = this._myDialog.open(RegisterUserDialogComponent, {
      width: '500px',
      data: 'Delete'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('can delete data');
        this.deleteRecord();
      }
    });
  }

  deleteRecord(): any {
    this._userInfoService.deleteOneUserInfo(this.userNamePathVar).subscribe(
      () => {
        console.log(`users with the id ${this.userNamePathVar} deleted successfully`);
        this.openConfirmationSnackBar(this.userNamePathVar + ' deleted');
        this.loadTableData();
      },
      (error) => console.log(error)
    );
    // this.notifyDelete.emit(this.employee.id);

  }

  openConfirmationSnackBar(message: string) {
    this.confirmationSnackBar.open(message + ' successfully', 'Ok!');
  }

}

// export class UserInfoDataSource extends DataSource<any> {
//   constructor(private _userInfoService: UserinfoService) {
//     super();
//   }

//   connect(): Observable<UserInfoModel[]> {
//     return this._userInfoService.getRegisteredUserList();
//   }

//   disconnect() { }
// }
