import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JobschedulerSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent, SCHEDULE_ROUTE } from './';

@NgModule({
    imports: [JobschedulerSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobschedulerHomeModule {}
