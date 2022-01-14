import { NgModule } from '@angular/core';
import {UsersComponent} from './components/users/users.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'edit-user/:id', component: UserFormComponent},
  // edit dhe insert kane path-e te ndryshme, por perdorin te njejtin komponent - UserFormComponent
  {path:  'add-user', component: UserFormComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
