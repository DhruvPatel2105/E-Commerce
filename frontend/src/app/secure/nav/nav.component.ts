import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private authService: AuthService) {
  }


  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('success');
    });
  }
}
