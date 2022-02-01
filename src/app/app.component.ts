import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User;
  title = 'flexApp';
  constructor(
    private router: Router,
    private authService: AuthService
) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
}


 logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}
}
