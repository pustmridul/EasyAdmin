import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
