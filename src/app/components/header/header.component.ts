import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/_models';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  toggleRightSidebar() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  toggleIconOnlySidebar() {
    this.iconOnlyToggled = !this.iconOnlyToggled;
    if (this.iconOnlyToggled) {
      document.querySelector("body").classList.add("toggle-sidebar");
    } else {
      document.querySelector("body").classList.remove("toggle-sidebar");
    }
  }
  currentUser: User;

  constructor(config: NgbDropdownConfig,  private router: Router,
    private authService: AuthService) {
      this.authService.currentUser.subscribe(x => this.currentUser = x);
    config.placement = "bottom-right";
  }
  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
}
}

 

