/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JobschedulerTestModule } from '../../../test.module';
import { SourceSchedularTableDetailComponent } from 'app/entities/source-schedular-table/source-schedular-table-detail.component';
import { SourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

describe('Component Tests', () => {
    describe('SourceSchedularTable Management Detail Component', () => {
        let comp: SourceSchedularTableDetailComponent;
        let fixture: ComponentFixture<SourceSchedularTableDetailComponent>;
        const route = ({ data: of({ sourceSchedularTable: new SourceSchedularTable('123') }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JobschedulerTestModule],
                declarations: [SourceSchedularTableDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SourceSchedularTableDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SourceSchedularTableDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.sourceSchedularTable).toEqual(jasmine.objectContaining({ id: '123' }));
            });
        });
    });
});
