import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.password === this.passwordConfirm) {
      this.authService.register({
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirm: this.passwordConfirm,
      }).subscribe(() => this.router.navigate(['/login']));
    } else {
      alert('Passwords do not match. Please try again.');
    }
  }
}
