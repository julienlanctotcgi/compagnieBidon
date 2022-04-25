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
 /* isUserAuthenticated(token : any): Promise<boolean> {
    return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).map((response) => response['isAuthenticated'])
      .toPromise();
  }*/
}
