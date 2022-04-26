import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router : Router) { }


  openLogin(){
    this.router.navigate(['authentication']);
  }
  openUserDetails() {
    this.router.navigate(['userdetails']);
  }

  openUsers() {
    this.router.navigate(['users']);
  }

}
