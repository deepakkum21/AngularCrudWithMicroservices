/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JhipsterTestModule } from '../../../test.module';
import { SourceSchedularTableUpdateComponent } from 'app/entities/source-schedular-table/source-schedular-table-update.component';
import { SourceSchedularTableService } from 'app/entities/source-schedular-table/source-schedular-table.service';
import { SourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

describe('Component Tests', () => {
    describe('SourceSchedularTable Management Update Component', () => {
        let comp: SourceSchedularTableUpdateComponent;
        let fixture: ComponentFixture<SourceSchedularTableUpdateComponent>;
        let service: SourceSchedularTableService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [SourceSchedularTableUpdateComponent]
            })
                .overrideTemplate(SourceSchedularTableUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SourceSchedularTableUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SourceSchedularTableService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new SourceSchedularTable('123');
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.sourceSchedularTable = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new SourceSchedularTable();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.sourceSchedularTable = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
