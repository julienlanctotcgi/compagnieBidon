import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor(private httpClient: HttpClient) {  }

  signUpUser(data : any) {
    return this.httpClient.post('https://reqres.in/api/register/', data);
  }
  setBearerToken(token : any) {
    localStorage.setItem('bearerToken', token);
  }
  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }
  /*isUserAuthenticated(token : any): Promise<boolean> {
    return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).map((response) => response['isAuthenticated'])
      .toPromise();
  }*/
}
