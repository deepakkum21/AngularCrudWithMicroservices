import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ISourceSchedularTable } from 'app/shared/model/source-schedular-table.model';
import { SourceSchedularTableService } from './source-schedular-table.service';

@Component({
    selector: 'jhi-source-schedular-table-update',
    templateUrl: './source-schedular-table-update.component.html'
})
export class SourceSchedularTableUpdateComponent implements OnInit {
    sourceSchedularTable: ISourceSchedularTable;
    isSaving: boolean;

    constructor(protected sourceSchedularTableService: SourceSchedularTableService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ sourceSchedularTable }) => {
            this.sourceSchedularTable = sourceSchedularTable;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.sourceSchedularTable.id !== undefined) {
            this.subscribeToSaveResponse(this.sourceSchedularTableService.update(this.sourceSchedularTable));
        } else {
            this.subscribeToSaveResponse(this.sourceSchedularTableService.create(this.sourceSchedularTable));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ISourceSchedularTable>>) {
        result.subscribe(
            (res: HttpResponse<ISourceSchedularTable>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError()
        );
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
