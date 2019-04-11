import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from './schedule.service';
import { SchedulerEntity } from 'app/model/SchedulerEntity';
import { FixedIntervalEntity } from 'app/model/FixedIntervalEntity';
import { DailyFre, CronEntity, WeeklyFre, MonthlyFre, CustomFre } from 'app/model/CronEntity';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'jhi-scheduling-config',
  templateUrl: './scheduling-config.component.html',
  styleUrls: ['./scheduling-config.component.css']
})
export class SchedulingConfigComponent implements OnInit {

  schedulingForm: FormGroup;
  // schedule: Schedule;
  scheduleconfig: SchedulerEntity;
  hours: number[];
  minutes: number[];
  secs: number[];
  dates: number[];
  startDate = new Date();
  minDate = new Date();
  weekDay = 'Monday';
  isDisabled  = true;

  constructor(private _formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute, private _scheduleService: ScheduleService, private _router: Router) {

  }

  ngOnInit() {
    this.schedulingForm = this._formBuilder.group({
      type: ['', Validators.required],
      fixedIntervalGroup: this._formBuilder.group({
        hourFI: [''],
        minFI: [''],
        secFI: ['']
      }),
      frequencyGroup: this._formBuilder.group({
        frequencyType: [''],
        dailyFreqgroup: this._formBuilder.group({
          hourFr: [''],
          minFr: [''],
          secFr: ['']
        }),
        weeklyFreqGroup: this._formBuilder.group({
          weekdayFr: [''],
          hourFr: [''],
          minFr: [''],
          secFr: ['']
        }),
        monthlyFreqGroup: this._formBuilder.group({
          dateFr: [''],
          hourFr: [''],
          minFr: [''],
          secFr: ['']
        }),
        customFreqGroup: this._formBuilder.group({
          dateFr: [''],
          hourFr: [''],
          minFr: [''],
          secFr: ['']
        })

      })
    });
    this.hours = this.getHours();
    this.minutes = this.getMins();
    this.secs = this.getSecs();
    this.dates = this.getDates();
  }
  getDates(): number[] {
    const dates: number[] = [];
    for (let _i = 1; _i <= 31; _i++) {
      dates[_i] = _i;
    }
    return dates;
  }

  getSecs() {
    const secs: number[] = [];
    for (let _i = 1; _i <= 59; _i++) {
      secs[_i] = _i;
    }
    return secs;
  }

  getMins() {
    const minOrSecs: number[] = [];
    for (let _i = 0; _i <= 59; _i++) {
      minOrSecs[_i] = _i;
    }
    return minOrSecs;
  }

  getHours() {
    const hours: number[] = [];
    for (let _i = 0; _i <= 23; _i++) {
      hours[_i] = _i;
    }
    return hours;
  }

  onSubmitClick() {
    console.log("Submit clicked --------------- " + this.schedulingForm.get('type').value);
    this.scheduleconfig = new SchedulerEntity();
    this.scheduleconfig.type = this.schedulingForm.get('type').value;
    if (this.schedulingForm.get('type').value === "manual") {
      this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya manual"));
    } else if (this.schedulingForm.get('type').value === "interval") {
      this.submitForInterval(this.scheduleconfig);
    } else if (this.schedulingForm.get('type').value === "frequency") {
      this.submitForFrequency(this.scheduleconfig);
    }
    //this._router.navigate(['scheduler/destinationdata'])
    console.log("submit clicked  ======== " + this.schedulingForm.get('fixedIntervalGroup.hourFI').value);

  }
  submitForFrequency(scheduleconfig: SchedulerEntity): any {
    this.scheduleconfig.cronEntity = new CronEntity();
    this.scheduleconfig.cronEntity.cronType = this.schedulingForm.get('frequencyGroup.frequencyType').value;
    if (this.scheduleconfig.cronEntity.cronType === 'daily') {
      this.submitForDaily(scheduleconfig);
    } else if (this.scheduleconfig.cronEntity.cronType === 'weekly') {
      this.submitForWeekly(scheduleconfig);
    } else if (this.scheduleconfig.cronEntity.cronType === 'monthly') {
      console.log("[[[[[[[[[[[[[[[[")
      this.submitForMonthly(scheduleconfig);
    } else if (this.scheduleconfig.cronEntity.cronType === 'custom') {
      this.submitForCustom(scheduleconfig);
    }
    // if(this.schedulingForm.get('frequencyGroup.dateFr').value) {
    //   this.scheduleconfig.cronEntity.date = this.schedulingForm.get('frequencyGroup.dateFr').value;
    // }
    // else {
    //   this.scheduleconfig.cronEntity.date = null;
    // }
    // if (this.schedulingForm.get('frequencyGroup.hourFr').value) {
    //   this.scheduleconfig.cronEntity.hour = this.schedulingForm.get('frequencyGroup.hourFr').value;
    // }else {
    //   this.scheduleconfig.cronEntity.hour =0;
    // }

    // if (this.schedulingForm.get('frequencyGroup.minFr').value) {
    //   this.scheduleconfig.cronEntity.min = this.schedulingForm.get('frequencyGroup.minFr').value;
    // }else {
    //   this.scheduleconfig.cronEntity.min =0;
    // }
    // if (this.schedulingForm.get('frequencyGroup.secFr').value) {
    //   this.scheduleconfig.cronEntity.sec = this.schedulingForm.get('frequencyGroup.secFr').value;
    // }else {
    //   this.scheduleconfig.cronEntity.sec =0;
    // }
    // console.log("sec :" + this.scheduleconfig.cronEntity.sec);
    // console.log("min :" + this.scheduleconfig.cronEntity.min);
    // console.log("hours :" + this.scheduleconfig.cronEntity.hour);
    // this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya frequency"));
  }
  submitForCustom(scheduleconfig: SchedulerEntity): any {
    this.scheduleconfig.cronEntity.customFrq = new CustomFre();
    console.log("in submit for Custom ");
    if(this.schedulingForm.get('frequencyGroup.customFreqGroup.dateFr').value) {
      this.scheduleconfig.cronEntity.customFrq.customDate = this.schedulingForm.get('frequencyGroup.customFreqGroup.dateFr').value;
    } else {
      this.scheduleconfig.cronEntity.customFrq.customDate = new Date();
    }
    if (this.schedulingForm.get('frequencyGroup.customFreqGroup.hourFr').value) {
      this.scheduleconfig.cronEntity.customFrq.hour = this.schedulingForm.get('frequencyGroup.customFreqGroup.hourFr').value;
    } else {
      this.scheduleconfig.cronEntity.customFrq.hour = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.customFreqGroup.minFr').value) {
      this.scheduleconfig.cronEntity.customFrq.min = this.schedulingForm.get('frequencyGroup.customFreqGroup.minFr').value;
    } else {
      this.scheduleconfig.cronEntity.customFrq.min = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.customFreqGroup.secFr').value) {
      this.scheduleconfig.cronEntity.customFrq.sec = this.schedulingForm.get('frequencyGroup.customFreqGroup.secFr').value;
    } else {
      this.scheduleconfig.cronEntity.customFrq.sec = 0;
    }
    console.log("sec :" + this.scheduleconfig.cronEntity.customFrq.sec);
    console.log("min :" + this.scheduleconfig.cronEntity.customFrq.min);
    console.log("hours :" + this.scheduleconfig.cronEntity.customFrq.hour);
    console.log("Date :" + this.scheduleconfig.cronEntity.customFrq.customDate);
    this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya custom frequency"));
  }
  submitForMonthly(scheduleconfig: SchedulerEntity): any {
    this.scheduleconfig.cronEntity.monthlyFrq = new MonthlyFre();
    console.log("in submit for Monthly ");
    if(this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.dateFr').value) {
      this.scheduleconfig.cronEntity.monthlyFrq.date = this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.dateFr').value;
    } else {
      this.scheduleconfig.cronEntity.monthlyFrq.date = 0;
    }
    
    if (this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.hourFr').value) {
      this.scheduleconfig.cronEntity.monthlyFrq.hour = this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.hourFr').value;
    } else {
      this.scheduleconfig.cronEntity.monthlyFrq.hour = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.minFr').value) {
      this.scheduleconfig.cronEntity.monthlyFrq.min = this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.minFr').value;
    } else {
      this.scheduleconfig.cronEntity.monthlyFrq.min = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.secFr').value) {
      this.scheduleconfig.cronEntity.monthlyFrq.sec = this.schedulingForm.get('frequencyGroup.monthlyFreqGroup.secFr').value;
    } else {
      this.scheduleconfig.cronEntity.monthlyFrq.sec = 0;
    }
    console.log("sec :" + this.scheduleconfig.cronEntity.monthlyFrq.sec);
    console.log("min :" + this.scheduleconfig.cronEntity.monthlyFrq.min);
    console.log("hours :" + this.scheduleconfig.cronEntity.monthlyFrq.hour);
    this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya monthly interval"));
  }

  submitForWeekly(scheduleconfig: SchedulerEntity): any {
    this.scheduleconfig.cronEntity.weeklyFrq = new WeeklyFre();
    console.log(this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.weekdayFr').value);
    if (this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.weekdayFr').value) {
      this.scheduleconfig.cronEntity.weeklyFrq.weekDay = this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.weekdayFr').value;
    } else {
      this.scheduleconfig.cronEntity.weeklyFrq.weekDay = "";
    }
    if (this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.hourFr').value) {
      this.scheduleconfig.cronEntity.weeklyFrq.hour = this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.hourFr').value;
    } else {
      this.scheduleconfig.cronEntity.weeklyFrq.hour = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.minFr').value) {
      this.scheduleconfig.cronEntity.weeklyFrq.min = this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.minFr').value;
    } else {
      this.scheduleconfig.cronEntity.weeklyFrq.min = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.secFr').value) {
      this.scheduleconfig.cronEntity.weeklyFrq.sec = this.schedulingForm.get('frequencyGroup.weeklyFreqGroup.secFr').value;
    } else {
      this.scheduleconfig.cronEntity.weeklyFrq.sec = 0;
    }
    console.log("sec :" + this.scheduleconfig.cronEntity.weeklyFrq.sec);
    console.log("min :" + this.scheduleconfig.cronEntity.weeklyFrq.min);
    console.log("hours :" + this.scheduleconfig.cronEntity.weeklyFrq.hour);
    this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya weekly interval"));
  }

  submitForDaily(scheduleconfig: SchedulerEntity) {
    //this.scheduleconfig.cronEntity= new CronEntity();
    this.scheduleconfig.cronEntity.dailyFrq = new DailyFre();
    if (this.schedulingForm.get('frequencyGroup.dailyFreqgroup.hourFr').value) {
      this.scheduleconfig.cronEntity.dailyFrq.hour = this.schedulingForm.get('frequencyGroup.dailyFreqgroup.hourFr').value;
    } else {
      this.scheduleconfig.cronEntity.dailyFrq.hour = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.dailyFreqgroup.minFr').value) {
      this.scheduleconfig.cronEntity.dailyFrq.min = this.schedulingForm.get('frequencyGroup.dailyFreqgroup.minFr').value;
    } else {
      this.scheduleconfig.cronEntity.dailyFrq.min = 0;
    }
    if (this.schedulingForm.get('frequencyGroup.dailyFreqgroup.secFr').value) {
      this.scheduleconfig.cronEntity.dailyFrq.sec = this.schedulingForm.get('frequencyGroup.dailyFreqgroup.secFr').value;
    } else {
      this.scheduleconfig.cronEntity.dailyFrq.sec = 0;
    }
    console.log("sec :" + this.scheduleconfig.cronEntity.dailyFrq.sec);
    console.log("min :" + this.scheduleconfig.cronEntity.dailyFrq.min);
    console.log("hours :" + this.scheduleconfig.cronEntity.dailyFrq.hour);
    this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya fixedInterval interval"));
  }

  submitForInterval(scheduleconfig: SchedulerEntity) {
    this.scheduleconfig.fixedInterval = new FixedIntervalEntity();
    if (this.schedulingForm.get('fixedIntervalGroup.hourFI').value) {
      this.scheduleconfig.fixedInterval.hour = this.schedulingForm.get('fixedIntervalGroup.hourFI').value

    } else {
      this.scheduleconfig.fixedInterval.hour = 0;
    }
    if (this.schedulingForm.get('fixedIntervalGroup.minFI').value) {
      this.scheduleconfig.fixedInterval.min = this.schedulingForm.get('fixedIntervalGroup.minFI').value

    } else {
      this.scheduleconfig.fixedInterval.min = 0;
    }
    if (this.schedulingForm.get('fixedIntervalGroup.secFI').value) {
      this.scheduleconfig.fixedInterval.sec = this.schedulingForm.get('fixedIntervalGroup.secFI').value

    } else {
      this.scheduleconfig.fixedInterval.sec = 0;
    }
    console.log("sec :" + this.scheduleconfig.fixedInterval.sec);
    console.log("min :" + this.scheduleconfig.fixedInterval.min);
    console.log("hours :" + this.scheduleconfig.fixedInterval.hour);
    this._scheduleService.scheduleJob(this.scheduleconfig).subscribe(() => console.log("ho gaya fixedInterval interval"));
  }

  // frequencyChange(event) {
  //   console.log(event);
  //   (<FormArray>this.schedulingForm.get('frequencyGroup')).push(this.getDailyFreqGroup());

  // }

  frequencyChange(event:MatSelectChange) {
    console.log("frequencyChange     ",event.source.value);
    if("daily" === event.source.value) {
      this.schedulingForm.get('frequencyGroup.dailyFreqgroup').setValidators(this.AtLeastOneFieldValidator);
      this.schedulingForm.get('frequencyGroup.dailyFreqgroup').updateValueAndValidity();
    } else if ( "weekly" === event.source.value) {
      this.schedulingForm.get('frequencyGroup.weeklyFreqGroup').setValidators(this.AtLeastOneFieldValidator);
      this.schedulingForm.get('frequencyGroup.weeklyFreqGroup').updateValueAndValidity();
      
    } else if ("monthly" === event.source.value) {
      this.schedulingForm.get('frequencyGroup.monthlyFreqGroup').setValidators(this.AtLeastOneFieldValidator);
      this.schedulingForm.get('frequencyGroup.monthlyFreqGroup').updateValueAndValidity();
     
    } else if("custom" === event.source.value) {
      this.schedulingForm.get('frequencyGroup.customFreqGroup').setValidators(this.AtLeastOneFieldValidator);
      this.schedulingForm.get('frequencyGroup.customFreqGroup').updateValueAndValidity();
      
    }
    

  }

  scheduleChange(event: MatSelectChange) {
    console.log("scheduleChange   " ,event.source.value);
    if('frequency' === event.source.value){
      this.schedulingForm.get('frequencyGroup.frequencyType').setValidators([Validators.required]);
    this.schedulingForm.get('frequencyGroup.frequencyType').updateValueAndValidity();
    } else if('interval' === event.source.value){
      this.schedulingForm.get('fixedIntervalGroup').setValidators(this.AtLeastOneFieldValidator);
      this.schedulingForm.get('fixedIntervalGroup').updateValueAndValidity();
    }
    
  }

  ddblChange(event: MatSelectChange) {
    console.log("scheduleChange   " ,event.source.value);
    if(event.source.value != 'undefined'){
      console.log("isDisalbed value changed for value other than undefined", this.isDisabled);
      this.isDisabled = false;
    }
    if(event.source.value === 'undefined' || event.source.value === undefined ){
      
      this.isDisabled = true;
      console.log("isDisalbed value changed for undefined", this.isDisabled);
    }
  }

  AtLeastOneFieldValidator(group: FormGroup): { [key: string]: any } {
    let isAtLeastOne = false;
    if (group && group.controls) {
      for (const control in group.controls) {
        console.log(control);
        if (group.controls.hasOwnProperty(control) && group.controls[control].valid && group.controls[control].value) {
          isAtLeastOne = true;
          group.controls[control].markAsTouched();
          //group.controls[control].ma
          break;
        }
      }
    }
    return isAtLeastOne ? null : { 'required': true};
  } 
}
