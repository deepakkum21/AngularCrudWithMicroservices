import { Component, OnInit, ViewChild } from '@angular/core';
import { Destiantionmodel } from 'app/model/destiantionmodel';
import { ScheduleService } from 'app/scheduling-config/schedule.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'jhi-destination-data',
  templateUrl: './destination-data.component.html',
  styles: []
})
export class DestinationDataComponent implements OnInit {
  dataSource: MatTableDataSource<Destiantionmodel>;
  destinationData: Destiantionmodel[];
  displayedColumns = ['index', 'empId', 'fullName', 'email', 'phone', 'contactPreference', 'indicator', 'modifiedDate'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _sheduleService: ScheduleService) { }

  ngOnInit() {
    this.loadTableData();
  }

  loadTableData() {
    this._sheduleService.getDestinationData().then((data: Destiantionmodel[]) => {
      console.log('destinationData:' + data);
      this.destinationData = data;
      console.log('destinationData:' + this.destinationData[0].empId);
      this.dataSource = new MatTableDataSource(this.destinationData);
    }).then(() => {
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
    });

  }
}
