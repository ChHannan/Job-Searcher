import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profile-page',
  templateUrl: './employer-profile-page.component.html',
  styleUrls: ['./employer-profile-page.component.css']
})
export class EmployerProfilePageComponent implements OnInit {
  currentTab = 'about';

  changeCurrentTab(newTab): void {
    this.currentTab = newTab;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
