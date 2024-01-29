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

  Login(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;

    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }
}
