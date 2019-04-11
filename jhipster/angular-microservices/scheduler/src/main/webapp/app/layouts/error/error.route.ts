import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';
import { SchedulingConfigComponent } from 'app/scheduling-config/scheduling-config.component';
import { DestinationDataComponent } from 'app/destination-data/destination-data.component';
import { SourceDataComponent } from 'app/source-data/source-data.component';
import { SchedulerComponent } from 'app/scheduler/scheduler.component';
import { FileuploadComponent } from 'app/fileupload/fileupload.component';

export const diffRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'jobscheduler'
        }
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'jobscheduler',
            error403: true
        }
    },
    {
        path: '404',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'jobscheduler',
            error404: true
        }
    },
    {
        path: 'scheduler',
        component: SchedulerComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title'
        }, children: [
            {
                path: 'fileupload',
                component: FileuploadComponent,
                data: {
                    authorities: [],
                    pageTitle: 'home.title'
                }
            },
            {
                path: 'sourcedata',
                component: SourceDataComponent,
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
    }/*,
    {
        path: 'scheduler/sourcedata',
        component: SourceDataComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title'
        },
        outlet: 'source'
    },
    {
        path: 'destinationdata',
        component: DestinationDataComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title'
        },
        outlet: 'source'
    },
    {
        path: 'scheduleconfig',
        component: SchedulingConfigComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title'
        },
        outlet: 'source'
    } */,
    {
        path: '**',
        redirectTo: '/404'
    }
];
