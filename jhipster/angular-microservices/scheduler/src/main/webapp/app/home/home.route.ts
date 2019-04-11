import { Route, Routes } from '@angular/router';

import { HomeComponent } from './';
import { SchedulerComponent } from 'app/scheduler/scheduler.component';
import { DestinationDataComponent } from 'app/destination-data/destination-data.component';
import { SourceDataComponent } from 'app/source-data/source-data.component';
import { SchedulingConfigComponent } from 'app/scheduling-config/scheduling-config.component';

export const HOME_ROUTE: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};

export const SCHEDULE_ROUTE: Routes =
    [
        {
            path: 'sourcedata',
            component: SourceDataComponent,
            data: {
                authorities: [],
                pageTitle: 'home.title'
            },
            children: [
                {
                    path: 'sourcedata',
                    component: DestinationDataComponent,
                    data: {
                        authorities: [],
                        pageTitle: 'home.title'
                    }
                },
                {
                    path: 'scheduleconfig',
                    component: SchedulingConfigComponent,
                    data: {
                        authorities: [],
                        pageTitle: 'home.title'
                    }
                },
                {
                    path: 'destinationdata',
                    component: DestinationDataComponent,
                    data: {
                        authorities: [],
                        pageTitle: 'home.title'
                    }
                }
            ]
    // },
    // {
    //     path: 'destinationdata',
    //     component: DestinationDataComponent,
    //     data: {
    //         authorities: [],
    //         pageTitle: 'home.title'
    //     }
    // },
    // {
    //     path: 'scheduleconfig',
    //     component: SchedulingConfigComponent,
    //     data: {
    //         authorities: [],
    //         pageTitle: 'home.title'
    //     }
    //
        }
];
