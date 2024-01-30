import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../form-design.css']
})
export class LoginPageComponent /*implements OnInit*/{
  /*username: string;
  password: string;*/
  http: HttpClient = inject(HttpClient)
  userData: User;

  /*ngOnInit() {
    this.fetchAllUsers();
  }*/

  Login(form: NgForm) {
    /*this.username = form.value.username;
    this.password = form.value.password;

    console.log("Username: " + this.username);
    console.log("Password: " + this.password);*/
    /*this.userData = new User(String(this.http.get('http://localhost:8080/api/v1/user/EMAIL')),
                             String(this.http.get('http://localhost:8080/api/v1/user/asdf')),
                             String(this.http.get('http://localhost:8080/api/v1/user/PASSWORD')));*/
    
    //this.userData.email = String(this.http.get('http://localhost:8080/api/v1/user/USERNAME'));
    //this.userData.password = String(this.http.get('http://localhost:8080/api/v1/user/PASSWORD'));
    this.userData = new User("", form.value.username, form.value.password);

    console.log(this.userData);

    this.http.post('http://localhost:8080/api/v1/user', this.userData).subscribe((response)=>{console.log(response)});
  }

  /*private fetchAllUsers() {
    this.http.get('http://localhost:8080/api/v1/user').subscribe((response)=>{console.log(response)});
  }*/
}
