import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { JobschedulerSharedModule } from 'app/shared';
import { JobschedulerCoreModule } from 'app/core';
import { JobschedulerAppRoutingModule } from './app-routing.module';
import { JobschedulerHomeModule } from './home/home.module';
import { JobschedulerAccountModule } from './account/account.module';
import { JobschedulerEntityModule } from './entities/entity.module';
import * as moment from 'moment';
import {MaterialModule} from './material.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SourceDataComponent } from './source-data/source-data.component';
import { DestinationDataComponent } from './destination-data/destination-data.component';
import { SchedulingConfigComponent } from './scheduling-config/scheduling-config.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            alertTimeout: 5000
        }),
        JobschedulerSharedModule.forRoot(),
        JobschedulerCoreModule,
        JobschedulerHomeModule,
        JobschedulerAccountModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        JobschedulerEntityModule,
        JobschedulerAppRoutingModule,
        MaterialModule,
         FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent, SchedulerComponent, SourceDataComponent, DestinationDataComponent, SchedulingConfigComponent, FileuploadComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class JobschedulerAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
