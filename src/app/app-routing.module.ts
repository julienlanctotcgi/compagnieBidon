import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'inscription', canActivate :[AuthGuard], component: InscriptionComponent },
  { path: 'authentication', component: LoginComponent},
  { path: 'users', canActivate :[AuthGuard], component: UsersComponent},
  {path : 'userdetails', canActivate :[AuthGuard], component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
