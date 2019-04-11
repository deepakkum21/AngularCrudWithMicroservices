import { NgModule } from '@angular/core';

import { JobschedulerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JobschedulerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JobschedulerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JobschedulerSharedCommonModule {}
