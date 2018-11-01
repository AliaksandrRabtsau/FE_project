import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links = [
    {url: '/user-info', name: 'info'},
    {url: '/user-edit', name: 'edit'}
  ];

  constructor(private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
