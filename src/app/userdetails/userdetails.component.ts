import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { StorageService } from '../services/storage.service';
import { User } from '../users/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  @Input() user : User;
  constructor(private storageService : StorageService, private router : RouterService) 
  {
    this.user = storageService.getUser() 
  }



  clicked()
  {
      this.router.openUsers();
  }
}
