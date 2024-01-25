import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['../form-design.css']
})
export class JoinPageComponent {
  partyName: string;
  password: string;

  @ViewChild('registerForm') form: NgForm;
  Join() {
    this.partyName = this.form.value.partyName;
    this.password = this.form.value.password;

    console.log("Name: " + this.partyName);
    console.log("Password: " + this.password);
  }
}
