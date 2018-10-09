import { Component, OnInit, ViewChild } from '@angular/core';
import { UserinfoService } from '../../service/userinfo.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-register-user-list-ag-grid',
  templateUrl: './register-user-list-ag-grid.component.html',
  styleUrls: ['./register-user-list-ag-grid.component.css']
})
export class RegisterUserListAgGridComponent implements OnInit {
  myRegisteredUerRowData: any;

  @ViewChild('agGrid') agGrid: AgGridNg2;

  myColumnDefs = [
    {headerName: 'First Name', field: 'firstName', checkboxSelection: true  },
    {headerName: 'Last Name', field: 'lastName' },
    {headerName: 'User Name', field: 'userName'}
];

  constructor(private _userInfoService: UserinfoService) { }

  ngOnInit() {
    this._userInfoService.getAgGridRegisteredUserList().subscribe((userList) => {
          this.myRegisteredUerRowData = userList;
          console.log('userInfolist:' + this.myRegisteredUerRowData);
        });
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
