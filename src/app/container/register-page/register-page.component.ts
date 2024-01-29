import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../form-design.css']
})
export class RegisterPageComponent {
  http: HttpClient = inject(HttpClient)

  /*name: string;
  username: string;
  email: string;
  password: string;*/
  userData: User;

  Register(form: NgForm) {
    /*this.name = "";
    this.username = form.value.username;
    this.email = form.value.email;
    this.password = form.value.password;*/

    /*console.log("Name: " + this.name);
    console.log("Username: " + this.username);
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);*/

    this.userData = new User(form.value.email, form.value.username, form.value.password);

    console.log(this.userData);

    this.http.post('http://sabian.tplinkdns.com:8080/api/v1/user', this.userData).subscribe((response)=>{console.log(response)});
  }

  //TODO: adatok ellenőrzése

}
