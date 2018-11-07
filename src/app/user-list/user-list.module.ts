import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserChoosenComponent } from './user-choosen/user-choosen.component';
import { UserDropdownListComponent } from './user-dropdown-list/user-dropdown-list.component';
import { UserDropdownItemComponent } from './user-dropdown-list/user-dropdown-item/user-dropdown-item.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    UserListComponent,
    UserChoosenComponent,
    UserDropdownListComponent,
    UserDropdownItemComponent
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule {}
