import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'authentication', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  {path : 'userdetails', component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
