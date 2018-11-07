import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, {name: username, password: password});
  }

  getCurrentUser() {
    return this.http.get<User>(`${this.apiUrl}/current-user`);
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  isAuthenticated(): Observable<object> {
    return this.http.get(`${this.apiUrl}/auth-check`);
  }

  recoverPass(username: string) {
    const params = new URLSearchParams();
    params.append('name', username);
    return this.http.get<User>(`${this.apiUrl}/recover-pass?${params.toString()}`);
  }

  updateUser(params: User) {
    return this.http.put(`${this.apiUrl}/update-user`, params);
  }

}
