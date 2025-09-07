import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    private apiUrl = 'http://localhost:8080/api/categories';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    create(category: any): Observable<any> {
        return this.http.post(this.apiUrl, category);
    }

    update(id: number, category: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, category);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
