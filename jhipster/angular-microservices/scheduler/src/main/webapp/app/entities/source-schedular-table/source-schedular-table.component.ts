import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
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
    currentSearch: string;

    constructor(
        protected sourceSchedularTableService: SourceSchedularTableService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected activatedRoute: ActivatedRoute,
        protected accountService: AccountService
    ) {
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.sourceSchedularTableService
                .search({
                    query: this.currentSearch
                })
                .pipe(
                    filter((res: HttpResponse<ISourceSchedularTable[]>) => res.ok),
                    map((res: HttpResponse<ISourceSchedularTable[]>) => res.body)
                )
                .subscribe(
                    (res: ISourceSchedularTable[]) => (this.sourceSchedularTables = res),
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
        }
        this.sourceSchedularTableService
            .query()
            .pipe(
                filter((res: HttpResponse<ISourceSchedularTable[]>) => res.ok),
                map((res: HttpResponse<ISourceSchedularTable[]>) => res.body)
            )
            .subscribe(
                (res: ISourceSchedularTable[]) => {
                    this.sourceSchedularTables = res;
                    this.currentSearch = '';
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
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
