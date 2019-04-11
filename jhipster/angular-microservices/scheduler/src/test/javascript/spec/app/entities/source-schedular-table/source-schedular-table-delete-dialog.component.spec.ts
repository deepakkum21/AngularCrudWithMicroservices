/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JobschedulerTestModule } from '../../../test.module';
import { SourceSchedularTableDeleteDialogComponent } from 'app/entities/source-schedular-table/source-schedular-table-delete-dialog.component';
import { SourceSchedularTableService } from 'app/entities/source-schedular-table/source-schedular-table.service';

describe('Component Tests', () => {
    describe('SourceSchedularTable Management Delete Component', () => {
        let comp: SourceSchedularTableDeleteDialogComponent;
        let fixture: ComponentFixture<SourceSchedularTableDeleteDialogComponent>;
        let service: SourceSchedularTableService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JobschedulerTestModule],
                declarations: [SourceSchedularTableDeleteDialogComponent]
            })
                .overrideTemplate(SourceSchedularTableDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SourceSchedularTableDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SourceSchedularTableService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete('123');
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith('123');
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
