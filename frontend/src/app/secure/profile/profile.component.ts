import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  infoForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: ''
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });

  
  }

  infoSubmit(): void {
    this.authService.updateInfo(this.infoForm.getRawValue()).subscribe(
      res => console.log(res)
    );
  }

  passwordSubmit(): void {
    this.authService.updatePassword(this.passwordForm.getRawValue()).subscribe(
      res => console.log(res)
    );
  }
}