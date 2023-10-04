import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../public.component.css']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.firstName + ' ' + this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.passwordConfirm);
  }

}
