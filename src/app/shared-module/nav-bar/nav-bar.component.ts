import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/models/user';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() showAction = true;
  username: string;
  collapsed = true;
  isLoggedIn = false;
  type = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: User) => {
      if (user) {
        this.type = user.type;
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

  navigate(): void {
    if (this.isLoggedIn) {
      if (this.type === 'candidate') {
        this.router.navigate(['/candidate-profile']).then();
      } else {
        this.router.navigate(['/employer-profile']).then();
      }
    } else {
      this.router.navigate(['/auth/login']).then();
    }
  }
}
