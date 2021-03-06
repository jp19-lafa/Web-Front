import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../providers/authentication/authentication.service';
import { Router } from '@angular/router';
import { MicrosoftLoginService } from '../../../providers/authentication/microsoft-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private microsoftLoginService: MicrosoftLoginService,
    private router: Router,
  ) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.authService.login({
        email: form.value.email,
        password: form.value.password
      }).subscribe(success => {
        this.router.navigate(['/overview']);
      }, error => {
        console.error('LoginComponent_onSubmit', error);
      })
    }
  }

  msLogin() {
    this.microsoftLoginService.mslogin();
  }
}
