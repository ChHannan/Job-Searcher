import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username: string;
  collapsed = true;
  isLoggedIn = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: User) => {
      if (user) {
        this.isLoggedIn = true;
        this.username = user.name;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  logoutUser(): void {
    this.authService.logout();
  }


}
