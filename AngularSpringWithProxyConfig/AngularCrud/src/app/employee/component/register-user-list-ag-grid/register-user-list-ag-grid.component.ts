import { Component, OnInit, ViewChild } from '@angular/core';
import { UserinfoService } from '../../service/userinfo.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
    selector: 'app-register-user-list-ag-grid',
    templateUrl: './register-user-list-ag-grid.component.html',
    styleUrls: ['./register-user-list-ag-grid.component.css']
})
export class RegisterUserListAgGridComponent implements OnInit {
    myRegisteredUerRowData: any[];

    gridApi: any;
    gridColApi: any;
    params: any;

    @ViewChild('agGrid') agGrid: AgGridNg2;

    myColumnDefs: any[];
    overlayLoadingTemplate: string;
    private myStatusBar;

    constructor(private _userInfoService: UserinfoService) {
        this.myColumnDefs = [
            { headerName: 'First Name', field: 'firstName', checkboxSelection: true },
            { headerName: 'Last Name', field: 'lastName' },
            { headerName: 'User Name', field: 'userName' },
            { headerName: 'Email', field: 'email' }
        ];

    }

    ngOnInit() {
        this.overlayLoadingTemplate =
            '<span class="ag-overlay-loading-center">Please click Load Data button to Load your rows </span>';
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedRows();
        const selectedData = selectedNodes.map(node => node.data);
       // const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedData.values.toString}`);
        console.log('params data: ' + this.params.Data);
    }

    onGridReady(params) {
      this.params = params;
        this.gridApi = params.api;
        this.gridColApi = params.columnApi;
    }

    loadData() {
        this._userInfoService.getAgGridRegisteredUserList().subscribe((userList) => {
            this.myRegisteredUerRowData = userList;
            console.log('userInfolist:' + this.myRegisteredUerRowData);
        });
        this.myStatusBar = {
            statusPanels: [
                {
                    statusPanel: 'agTotalRowCountComponent',
                    align: 'left'
                },
                { statusPanel: 'agFilteredRowCountComponent' },
                { statusPanel: 'agSelectedRowCountComponent' },
                { statusPanel: 'agAggregationComponent' }
            ]
        };
    }

}
