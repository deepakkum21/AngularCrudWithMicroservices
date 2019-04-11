import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISourceSchedularTable } from 'app/shared/model/source-schedular-table.model';
import { SourceSchedularTableService } from './source-schedular-table.service';

@Component({
    selector: 'jhi-source-schedular-table-delete-dialog',
    templateUrl: './source-schedular-table-delete-dialog.component.html'
})
export class SourceSchedularTableDeleteDialogComponent {
    sourceSchedularTable: ISourceSchedularTable;

    constructor(
        protected sourceSchedularTableService: SourceSchedularTableService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: string) {
        this.sourceSchedularTableService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'sourceSchedularTableListModification',
                content: 'Deleted an sourceSchedularTable'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-source-schedular-table-delete-popup',
    template: ''
})
export class SourceSchedularTableDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ sourceSchedularTable }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(SourceSchedularTableDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.sourceSchedularTable = sourceSchedularTable;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/source-schedular-table', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/source-schedular-table', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
