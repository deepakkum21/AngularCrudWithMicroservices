import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SourceSchedularTable } from 'app/shared/model/source-schedular-table.model';
import { SourceSchedularTableService } from './source-schedular-table.service';
import { SourceSchedularTableComponent } from './source-schedular-table.component';
import { SourceSchedularTableDetailComponent } from './source-schedular-table-detail.component';
import { SourceSchedularTableUpdateComponent } from './source-schedular-table-update.component';
import { SourceSchedularTableDeletePopupComponent } from './source-schedular-table-delete-dialog.component';
import { ISourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

@Injectable({ providedIn: 'root' })
export class SourceSchedularTableResolve implements Resolve<ISourceSchedularTable> {
    constructor(private service: SourceSchedularTableService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISourceSchedularTable> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<SourceSchedularTable>) => response.ok),
                map((sourceSchedularTable: HttpResponse<SourceSchedularTable>) => sourceSchedularTable.body)
            );
        }
        return of(new SourceSchedularTable());
    }
}

export const sourceSchedularTableRoute: Routes = [
    {
        path: '',
        component: SourceSchedularTableComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'SourceSchedularTables'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: SourceSchedularTableDetailComponent,
        resolve: {
            sourceSchedularTable: SourceSchedularTableResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'SourceSchedularTables'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: SourceSchedularTableUpdateComponent,
        resolve: {
            sourceSchedularTable: SourceSchedularTableResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'SourceSchedularTables'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: SourceSchedularTableUpdateComponent,
        resolve: {
            sourceSchedularTable: SourceSchedularTableResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'SourceSchedularTables'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const sourceSchedularTablePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: SourceSchedularTableDeletePopupComponent,
        resolve: {
            sourceSchedularTable: SourceSchedularTableResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'SourceSchedularTables'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
