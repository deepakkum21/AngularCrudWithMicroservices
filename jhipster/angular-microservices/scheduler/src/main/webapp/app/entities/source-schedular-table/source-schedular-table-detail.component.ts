import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

@Component({
    selector: 'jhi-source-schedular-table-detail',
    templateUrl: './source-schedular-table-detail.component.html'
})
export class SourceSchedularTableDetailComponent implements OnInit {
    sourceSchedularTable: ISourceSchedularTable;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ sourceSchedularTable }) => {
            this.sourceSchedularTable = sourceSchedularTable;
        });
    }

    previousState() {
        window.history.back();
    }
}
