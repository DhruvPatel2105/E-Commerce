import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup | undefined;
  email: '' | undefined;
  password: '' | undefined;

  constructor( 
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.http.post(`${environment.api}/register`,{
      email: this.email,
      password: this.password
  }).subscribe(() => this.router.navigate(['/login']));
 
  }
}
