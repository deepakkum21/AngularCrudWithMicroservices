import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Destiantionmodel } from 'app/model/destiantionmodel';
import { ScheduleService } from 'app/scheduling-config/schedule.service';

@Component({
  selector: 'jhi-source-data',
  templateUrl: './source-data.component.html',
  styles: []
})
export class SourceDataComponent implements OnInit {
  dataSource: MatTableDataSource<Destiantionmodel>;
  destinationData: Destiantionmodel[];
  displayedColumns = ['index', 'empId', 'fullName', 'email', 'phone', 'contactPreference', 'indicator'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _sheduleService: ScheduleService) { }

  ngOnInit() {
    this.loadTableData();
  }

  loadTableData() {
    this._sheduleService.getSourceData().then((data: Destiantionmodel[]) => {
      // console.log('destinationData:' + data);
      // if (data === null) {
      //   this.destinationData = null;
      //   this.dataSource = new MatTableDataSource(this.destinationData);
      // }
      // else {
      this.destinationData = data;
        // console.log('destinationData:' + this.destinationData[0].empId);
        this.dataSource = new MatTableDataSource(this.destinationData);
      //}
    }).then(() => {
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
    });

  }

}
