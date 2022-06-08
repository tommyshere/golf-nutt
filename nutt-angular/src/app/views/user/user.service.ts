import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../interface';
import { handleError } from '../../shared/util';

const ENDPOINT = 'http://localhost:4000/api/auth';
const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    const email = user.email;
    const password = user.password;
    const api = `${ENDPOINT}/signin`;
    return this.http
      .post<any>(api, { email, password }, { headers: httpOptions })
      .pipe(
        tap(res => {
          localStorage.setItem('access_token', res.token);
        }),
        catchError(error => handleError(error))
      );
  }

  registerUser(email: string, password: string) {
    let api = `${ENDPOINT}/register`;
    return this.http.post(api, { email, password }, { headers: httpOptions });
  }
}
