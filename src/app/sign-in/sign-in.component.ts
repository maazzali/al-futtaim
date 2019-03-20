import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authenticate.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(AuthenticationService) private authenticationService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get formCtr(): any { return this.loginForm.controls; }

  public signIn() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.signin(this.formCtr.username.value, this.formCtr.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // success
        },
        error => {
          // failure
          this.formCtr['username'].setValue('');
          this.formCtr['password'].setValue('');
        });
  }

}
