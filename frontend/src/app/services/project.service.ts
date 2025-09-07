import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    private apiUrl = 'http://localhost:8080/api/projects';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    create(project: any): Observable<any> {
        return this.http.post(this.apiUrl, project);
    }

    update(id: number, project: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, project);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
