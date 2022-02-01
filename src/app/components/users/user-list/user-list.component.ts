import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : [];
  userCount: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService)
    {
      if(!this.authService.login){
        this.router.navigate(['login']);
      }
   }


  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.userList = data.Data;
        this.userCount = data.Count;
      },
      err => {
        this.userList = JSON.parse(err.error).message;
      }
    );
  }

}
