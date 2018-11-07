import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';

import { User } from '../model/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user: User | any;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {

  }
}
