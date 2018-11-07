import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverForm: FormGroup;
  loading = false;
  submitted = false;
  recoveredPass: string;

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.recoverForm = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  get f() { return this.recoverForm.controls; }

  recover() {
    this.submitted = true;
    this.recoveredPass = '';
    if (this.recoverForm.invalid) {
      return;
    }
    this.loading = true;

    this.auth.recoverPass((this.f.username.value).trim())
      .subscribe(
        (data) => {
          this.recoveredPass = data.password;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        });
  }

}
