/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JobschedulerTestModule } from '../../../test.module';
import { SourceSchedularTableComponent } from 'app/entities/source-schedular-table/source-schedular-table.component';
import { SourceSchedularTableService } from 'app/entities/source-schedular-table/source-schedular-table.service';
import { SourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

describe('Component Tests', () => {
    describe('SourceSchedularTable Management Component', () => {
        let comp: SourceSchedularTableComponent;
        let fixture: ComponentFixture<SourceSchedularTableComponent>;
        let service: SourceSchedularTableService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JobschedulerTestModule],
                declarations: [SourceSchedularTableComponent],
                providers: []
            })
                .overrideTemplate(SourceSchedularTableComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SourceSchedularTableComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SourceSchedularTableService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new SourceSchedularTable('123')],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.sourceSchedularTables[0]).toEqual(jasmine.objectContaining({ id: '123' }));
        });
    });
});
