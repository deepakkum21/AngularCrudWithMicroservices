import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from 'app/shared';
import {
    SourceSchedularTableComponent,
    SourceSchedularTableDetailComponent,
    SourceSchedularTableUpdateComponent,
    SourceSchedularTableDeletePopupComponent,
    SourceSchedularTableDeleteDialogComponent,
    sourceSchedularTableRoute,
    sourceSchedularTablePopupRoute
} from './';

const ENTITY_STATES = [...sourceSchedularTableRoute, ...sourceSchedularTablePopupRoute];

@NgModule({
    imports: [JhipsterSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        SourceSchedularTableComponent,
        SourceSchedularTableDetailComponent,
        SourceSchedularTableUpdateComponent,
        SourceSchedularTableDeleteDialogComponent,
        SourceSchedularTableDeletePopupComponent
    ],
    entryComponents: [
        SourceSchedularTableComponent,
        SourceSchedularTableUpdateComponent,
        SourceSchedularTableDeleteDialogComponent,
        SourceSchedularTableDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSourceSchedularTableModule {}
