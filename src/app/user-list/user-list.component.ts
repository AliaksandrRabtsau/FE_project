import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selectedUser: User;
  dropdown = false;

  // users?: User[];
  users?: any;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

  ngOnInit() {
  }

  dropDown() {
    this.dropdown = !this.dropdown;
  }

  selectUser(user: User) {
    this.dropDown();
    this.selectedUser = user;
  }
}
