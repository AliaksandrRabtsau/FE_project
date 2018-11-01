import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';
import { first } from 'rxjs/operators';

import { User } from '../model/user';

// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user: User | any;
  // userKeys: string[];

//   constructor(private authenticationService: AuthenticationService,
//                private userService: UserService) {
// }

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.getCurrentUser().subscribe(user => { this.user = user; });
    console.log(this.user);
  }

  ngOnInit() {
    // this.loadUser();
    // this.user = this.userService.user;

      // .pipe(first())
    //   .subscribe((user: User ) => {
    //     this.user = user;
    //   });
    // console.log('user qq' + this.user);
  }

  // private loadUser() {
  //   this.authenticationService.getCurrentUser().subscribe(user => { this.user = user; });
  // }

}
