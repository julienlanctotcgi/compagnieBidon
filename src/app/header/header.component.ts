import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthenticationServiceService, private router : RouterService) { }

  ngOnInit(): void {
  }
  
  logout()
  {
     this.authService.clearToken();
     this.router.openLogin();
  }
}
