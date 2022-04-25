import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {  }

  getAllUsers():  Observable<any>{
    
    return this.httpClient.get<any>('https://reqres.in/api/users/', {
    });
  }
}
