import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISourceSchedularTable } from 'app/shared/model/source-schedular-table.model';
import { AccountService } from 'app/core';
import { SourceSchedularTableService } from './source-schedular-table.service';

@Component({
    selector: 'jhi-source-schedular-table',
    templateUrl: './source-schedular-table.component.html'
})
export class SourceSchedularTableComponent implements OnInit, OnDestroy {
    sourceSchedularTables: ISourceSchedularTable[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected sourceSchedularTableService: SourceSchedularTableService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.sourceSchedularTableService
            .query()
            .pipe(
                filter((res: HttpResponse<ISourceSchedularTable[]>) => res.ok),
                map((res: HttpResponse<ISourceSchedularTable[]>) => res.body)
            )
            .subscribe(
                (res: ISourceSchedularTable[]) => {
                    this.sourceSchedularTables = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInSourceSchedularTables();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ISourceSchedularTable) {
        return item.id;
    }

    registerChangeInSourceSchedularTables() {
        this.eventSubscriber = this.eventManager.subscribe('sourceSchedularTableListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
