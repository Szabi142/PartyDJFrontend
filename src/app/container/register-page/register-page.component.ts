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

  userData: User;

  Register(form: NgForm) {
    this.userData = new User(form.value.email, form.value.username, form.value.password);

    console.log(form);

    console.log(this.userData);

    this.http.post('http://localhost:8080/api/v1/user', this.userData).subscribe((response)=>{console.log(response)});
  }

  //TODO: adatok ellenőrzése

}
