import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-candidate-profile-page',
  templateUrl: './candidate-profile-page.component.html',
  styleUrls: ['./candidate-profile-page.component.css']
})
export class CandidateProfilePageComponent implements OnInit {
  currentTab = 'about';

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrentTab(newTab): void {
    this.currentTab = newTab;
  }
}
