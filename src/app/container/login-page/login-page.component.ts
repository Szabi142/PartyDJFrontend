import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../form-design.css']
})
export class LoginPageComponent {
  username: string;
  password: string;

  @ViewChild('registerForm') form: NgForm;
  Login() {
    this.username = this.form.value.username;
    this.password = this.form.value.password;

    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }
}
