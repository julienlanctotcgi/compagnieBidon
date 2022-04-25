import { Injectable } from '@angular/core';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public userStored: User;

  constructor() {
    this.userStored = new User();
  }

  public getUser(): User {
      return this.userStored;
  }

  public setUser(user: any): void {
      this.userStored = user;
  }
}
