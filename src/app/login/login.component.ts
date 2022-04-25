import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { SignUpServiceService } from '../services/sign-up-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    public formAuthentication: FormGroup;
    public bearerToken: any;
    constructor(private fb: FormBuilder, private authenticationService: AuthenticationServiceService,) {
      this.formAuthentication = this.createSignupForm();
    }
  
    createSignupForm(): FormGroup {
      return this.fb.group(
        {
          email: [
            null,
            Validators.compose([Validators.email, Validators.required])
          ],
          password: [
            null,
            Validators.compose([
              Validators.required,
            ])
          ],
        },
      );
    }

  
    submit() {
      const user: any = { email: this.formAuthentication.value.email, password: this.formAuthentication.value.password };
      console.log(user);
      this.authenticationService.authenticateUser(user).subscribe(
        (res :any) => {
            this.bearerToken = res['token'];
            this.authenticationService.setBearerToken(this.bearerToken);
          },
          err => {
            if (err.status === 404) {
              console.log("error");
              } else {
              console.log(err);
            }
        });
      }
    }
