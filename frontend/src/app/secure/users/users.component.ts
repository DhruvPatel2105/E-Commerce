import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService){
    
  }

  ngOnInit(): void{
  this.userService.all().subscribe(
    (res:any) =>{
      this.users = res.data;
    }
  );
}
}
