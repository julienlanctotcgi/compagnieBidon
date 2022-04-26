import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) {  }
  authenticateUser(data: any) {
    return this.httpClient.post('https://reqres.in/api/login/', data);
  }
  setBearerToken(token : any) {
    localStorage.setItem('bearerToken', token);
  }
  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isLoggedIn(){
    if(this.getBearerToken() != null)
    {
       return true;
    }
    return false;
  }

  clearToken()
  {
     localStorage.clear();
  }
}
