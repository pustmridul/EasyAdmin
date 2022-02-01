import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const usersRoutes: Routes = [
  { path: 'user',  component: UserComponent },
  { path: 'users',  component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'create-user', component: CreateUserComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }