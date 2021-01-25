import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../models/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employer-profile-page',
  templateUrl: './employer-profile-page.component.html',
  styleUrls: ['./employer-profile-page.component.css']
})
export class EmployerProfilePageComponent implements OnInit {
  currentTab = 'about';
  aboutFormGroup: FormGroup;
  user: User;

  changeCurrentTab(newTab): void {
    this.currentTab = newTab;
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(response => {
      this.user = response;
    });

    this.aboutFormGroup = new FormGroup({
      about: new FormControl()
    });
  }

  updateAbout(): void {
    this.authService.update(this.user.id, this.aboutFormGroup.value);
  }

  logout(): void {
    this.authService.logout();
  }
}
