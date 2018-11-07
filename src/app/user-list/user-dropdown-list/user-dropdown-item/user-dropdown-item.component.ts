import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-dropdown-item',
  templateUrl: './user-dropdown-item.component.html',
  styleUrls: ['./user-dropdown-item.component.css']
})
export class UserDropdownItemComponent implements OnInit {

  @Input() user?: User;
  constructor() { }

  ngOnInit() {
  }

}
