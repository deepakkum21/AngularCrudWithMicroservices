import { Component, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { UserinfoService } from '../../service/userinfo.service';
import { UserInfoModel } from '../../../models/user-info-model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

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

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _userInfoService: UserinfoService) { }

  // ngOnInit() {
  //   this._userInfoService.getRegisteredUserList().subscribe((userList) => {
  //     this.userInfoList = userList;
  //     console.log('userInfolist:' + this.userInfoList);
  //     this.dataSource = new MatTableDataSource(this.userInfoList);
  //     this.dataSource.sort = this.sort;
  //   });

  // }
  ngOnInit() {

    this._userInfoService.getRegisteredUserList().then((data: UserInfoModel[]) => {
      console.log('userInfolist:' + data);
      this.userInfoList = data;
      this.dataSource = new MatTableDataSource(this.userInfoList);
    }).then(() => {
      this.dataSource.sort = this.sort;
      console.log('userInfolist1:' + this.userInfoList);
    });
    console.log('userInfolist:' + this.userInfoList);


  }

  // called after the default change detector has completed checking all content of a directive
  ngAfterContentChecked() {
    if (this.contentCheckCount < 1) {
      this.dataSource.sort = this.sort;
    }
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
