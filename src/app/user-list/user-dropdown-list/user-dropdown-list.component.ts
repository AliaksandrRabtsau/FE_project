import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-dropdown-list',
  templateUrl: './user-dropdown-list.component.html',
  styleUrls: ['./user-dropdown-list.component.css']
})

export class UserDropdownListComponent implements OnInit {

  @Input() dropdown = true;
  // @Input() users?: User[];
  @Input() users?: any;
  @Output() selectUser = new EventEmitter<User>();
  filteredUsers: any;

  constructor() {
  }

  ngOnInit() {
    this.filteredUsers = this.users;
  }

  filterSearch($event) {
    this.setSearchedItems($event.target.value);
  }

  setSearchedItems(value) {
    this.filteredUsers = this.users.filter(user => user.name
      .toLowerCase()
      .indexOf(value.toLowerCase()) !== -1);
  }
}
