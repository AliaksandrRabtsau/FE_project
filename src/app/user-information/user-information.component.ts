import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { UserState } from '../store/state';
import { getUser } from '../store/selectors';
import { GetUser } from '../store/actions';

import { User } from '../model/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  user$: Observable<User> = this.store.pipe(select(getUser));

  constructor(private store: Store<UserState>) {
    this.store.dispatch(new GetUser());
  }

  ngOnInit() {
  }
}
