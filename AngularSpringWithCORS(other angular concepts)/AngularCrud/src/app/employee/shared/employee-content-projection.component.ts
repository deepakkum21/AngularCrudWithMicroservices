import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-content-projection',
  templateUrl: './employee-content-projection.component.html',
  styleUrls: ['./employee-content-projection.component.css']
})
export class EmployeeContentProjectionComponent implements OnInit {

  @Input() hasJustView: boolean;
  @Input() title: string;
  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
  }

}
