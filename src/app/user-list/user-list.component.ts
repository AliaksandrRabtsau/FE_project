import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AllUsersState } from '../store/state';
import { GetUsers } from '../store/actions';
import { getAllUsers } from '../store/selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selectedUser: User;
  dropdown = false;
  users$: Observable<User[]>;

  constructor(private store: Store<AllUsersState>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(getAllUsers));
    this.store.dispatch(new GetUsers());
  }

  dropDown() {
    this.dropdown = !this.dropdown;
  }

  selectUser(user: User) {
    this.dropDown();
    this.selectedUser = user;
  }
}
