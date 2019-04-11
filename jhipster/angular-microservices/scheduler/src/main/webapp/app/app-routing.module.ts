import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { diffRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { SCHEDULE_ROUTE } from './home';
import { SchedulerComponent } from './scheduler/scheduler.component';

const LAYOUT_ROUTES = [navbarRoute, ...diffRoute];
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#JobschedulerAdminModule'
                },
                ...LAYOUT_ROUTES
            ],
            { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
        )
    ],
    exports: [RouterModule]
})
export class JobschedulerAppRoutingModule {}
