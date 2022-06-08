import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interface';
import { Observable, tap } from 'rxjs';

// TODO: Change for .env
const ENDPOINT = 'http://localhost:4000/api/auth';
const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}

  registerUser(email: string, password: string) {
    let api = `${ENDPOINT}/register`;
    return this.http.post(api, { email, password }, { headers: httpOptions });
  }

  login(email: string, password: string) {
    let api = `${ENDPOINT}/signin`;
    return this.http
      .post<any>(api, { email, password }, { headers: httpOptions })
      .pipe(
        tap(res => {
          localStorage.setItem('access_token', res.token);
        })
      );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }

  getUserProfile(id: any): Observable<User> {
    let api = `${ENDPOINT}/user-profile/${id}`;
    return this.http.get<User>(api, { headers: httpOptions });
  }

  handleError(error: HttpErrorResponse) {
    let msg: string;
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return Error(msg);
  }
}
