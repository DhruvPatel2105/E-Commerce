import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user: User | undefined;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit():void {
    // this.authService.user().subscribe(
    //  user => this.user = user,
    // () => this.router.navigate(['/login'])
    // );
    
  }

}
