import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISourceSchedularTable } from 'app/shared/model/source-schedular-table.model';

type EntityResponseType = HttpResponse<ISourceSchedularTable>;
type EntityArrayResponseType = HttpResponse<ISourceSchedularTable[]>;

@Injectable({ providedIn: 'root' })
export class SourceSchedularTableService {
    public resourceUrl = SERVER_API_URL + 'api/source-schedular-tables';
    public resourceSearchUrl = SERVER_API_URL + 'api/_search/source-schedular-tables';

    constructor(protected http: HttpClient) {}

    create(sourceSchedularTable: ISourceSchedularTable): Observable<EntityResponseType> {
        return this.http.post<ISourceSchedularTable>(this.resourceUrl, sourceSchedularTable, { observe: 'response' });
    }

    update(sourceSchedularTable: ISourceSchedularTable): Observable<EntityResponseType> {
        return this.http.put<ISourceSchedularTable>(this.resourceUrl, sourceSchedularTable, { observe: 'response' });
    }

    find(id: string): Observable<EntityResponseType> {
        return this.http.get<ISourceSchedularTable>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISourceSchedularTable[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: string): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISourceSchedularTable[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
