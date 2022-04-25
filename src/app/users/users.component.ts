import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[];
  constructor(private userService : UserService, private storageService : StorageService, private router : RouterService) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => this.users = data.data as User[],
      err => { console.log("error, couldnt get users") }
    );
  }

  clicked(user : User)
  {
      this.storageService.setUser(user);
      this.router.openUserDetails();  
  }

}
