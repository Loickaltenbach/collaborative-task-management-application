import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/auth';
    private tokenKey = 'auth-token';

    constructor(private http: HttpClient) { }

    register(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, user);
    }

    login(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, user).pipe(
            tap((response: any) => {
                if (response && response.token) {
                    localStorage.setItem(this.tokenKey, response.token);
                }
            })
        );
    }

    logout(): void {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('isLoggedIn') === 'true' || this.getToken() !== null;
    }

    getUserEmail(): string {
        return localStorage.getItem('userEmail') || '';
    }
}
