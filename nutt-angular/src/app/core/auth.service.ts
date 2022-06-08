import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interface';
import { Observable } from 'rxjs';

// TODO: Change for .env
const ENDPOINT = 'http://localhost:4000/api/auth';
const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}

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
}
