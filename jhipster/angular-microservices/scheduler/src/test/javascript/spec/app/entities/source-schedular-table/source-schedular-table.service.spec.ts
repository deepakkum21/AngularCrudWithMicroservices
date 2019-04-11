/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { SourceSchedularTableService } from 'app/entities/source-schedular-table/source-schedular-table.service';
import { ISourceSchedularTable, SourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

describe('Service Tests', () => {
    describe('SourceSchedularTable Service', () => {
        let injector: TestBed;
        let service: SourceSchedularTableService;
        let httpMock: HttpTestingController;
        let elemDefault: ISourceSchedularTable;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(SourceSchedularTableService);
            httpMock = injector.get(HttpTestingController);

            elemDefault = new SourceSchedularTable('ID', 0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0, 'AAAAAAA');
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign({}, elemDefault);
                service
                    .find('123')
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a SourceSchedularTable', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 'ID'
                    },
                    elemDefault
                );
                const expected = Object.assign({}, returnedFromService);
                service
                    .create(new SourceSchedularTable(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a SourceSchedularTable', async () => {
                const returnedFromService = Object.assign(
                    {
                        empId: 1,
                        fullName: 'BBBBBB',
                        indicator: 'BBBBBB',
                        email: 'BBBBBB',
                        phone: 1,
                        contactPreference: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign({}, returnedFromService);
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of SourceSchedularTable', async () => {
                const returnedFromService = Object.assign(
                    {
                        empId: 1,
                        fullName: 'BBBBBB',
                        indicator: 'BBBBBB',
                        email: 'BBBBBB',
                        phone: 1,
                        contactPreference: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign({}, returnedFromService);
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a SourceSchedularTable', async () => {
                const rxPromise = service.delete('123').subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
