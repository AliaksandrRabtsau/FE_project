import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
