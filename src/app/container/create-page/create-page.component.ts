import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['../form-design.css']
})
export class CreatePageComponent {
  partyName: string;
  password: string;

  @ViewChild('registerForm') form: NgForm;
  Create() {
    this.partyName = this.form.value.partyName;
    this.password = this.form.value.password;

    console.log("Name: " + this.partyName);
    console.log("Password: " + this.password);
  }
}
