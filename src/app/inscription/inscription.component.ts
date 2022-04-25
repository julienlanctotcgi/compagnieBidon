import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { SignUpServiceService } from '../services/sign-up-service.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']

})
export class InscriptionComponent {
  
  public formInscription: FormGroup;
  public bearerToken: any;
  constructor(private fb: FormBuilder, private signUpService: SignUpServiceService,) {
    this.formInscription = this.createSignupForm();
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
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            Validators.minLength(8)
          ])
        ],
      },
    );
  }

  submit() {
    const user: any = { email: this.formInscription.value.email, password: this.formInscription.value.password };
    console.log(user);
    this.signUpService.signUpUser(user).subscribe(
      (res :any) => {
          this.bearerToken = res['token'];
          this.signUpService.setBearerToken(this.bearerToken);
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

