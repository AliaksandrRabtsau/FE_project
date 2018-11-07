import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-choosen',
  templateUrl: './user-choosen.component.html',
  styleUrls: ['./user-choosen.component.css']
})
export class UserChoosenComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {

  }
}
