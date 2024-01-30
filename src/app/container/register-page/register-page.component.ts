import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from 'src/app/Model/User';
import { matchPassword } from './matchPassword.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../form-design.css']
})

export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null)
    },
    {
      validators: matchPassword
    })
  }

  

  http: HttpClient = inject(HttpClient)
  userData: User;

  Register() {
    this.userData = new User(this.registerForm.value.email, this.registerForm.value.username, this.registerForm.value.password);

    console.log(this.userData);

    this.http.post('http://localhost:8080/api/v1/user', this.userData).subscribe((response)=>{console.log(response)});
  }

  /*Register(form: NgForm) {
    this.userData = new User(form.value.email, form.value.username, form.value.password);

    console.log(this.userData);

    this.http.post('http://localhost:8080/api/v1/user', this.userData).subscribe((response)=>{console.log(response)});
  }*/
}
