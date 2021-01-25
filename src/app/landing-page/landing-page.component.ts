import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  searchJobFormGroup: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchJobFormGroup = new FormGroup({
      title: new FormControl(),
      type: new FormControl('All')
    });
  }

  searchJob(): void {
    this.router.navigate(['jobs'], {queryParams: this.searchJobFormGroup.value}).then();
  }
}
