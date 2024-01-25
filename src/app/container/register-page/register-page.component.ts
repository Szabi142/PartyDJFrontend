import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../form-design.css']
})
export class RegisterPageComponent {
  name: string;
  username: string;
  email: string;
  password: string;

  @ViewChild('registerForm') form: NgForm;
  Register() {
    this.name = "";
    this.username = this.form.value.username;
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    console.log("Name: " + this.name);
    console.log("Username: " + this.username);
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);
  }

  //TODO: adatok ellenőrzése
}
