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
  page = 1;
  lastPage: number = 0;

  constructor(private userService: UserService){
    
  }

  ngOnInit(): void{
  this.load;
}

load(): void{
  this.userService.all(this.page).subscribe(
    (res:any) =>{
      this.users = res.data;
      this.lastPage = res.meta.last_page;
    }
  );
}

next(): void{
  if(this.page === this.lastPage){
    return;
  }
this.page++;
this.load();
}

previous(): void{
  if(this.page === 0){
    return;
  }
this.page--;
this.load();
}


}
