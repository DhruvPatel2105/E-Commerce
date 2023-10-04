import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

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
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.http.post(`${environment.api}/register`,{
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm:this.passwordConfirm
  }).subscribe(() => this.router.navigate(['/login']));
 
}


}
