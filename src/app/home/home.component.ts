import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

import {select, Store} from '@ngrx/store';
import { UserState } from '../store/state';
import { LogoutUser } from '../store/actions';

import { getUser } from '../store/selectors';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links = [
    {url: '/user-info', name: 'INFO'},
    {url: '/user-edit', name: 'EDIT'},
    {url: '/user-list', name: 'LIST'}
  ];
  user$: Observable<User> = this.store.pipe(select(getUser));
  constructor(private auth: AuthenticationService,
              private router: Router,
              private store: Store<UserState>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new LogoutUser());
  }
}
