import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Company} from 'src/app/models/company';

@Component({
  selector: 'app-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.css']
})
export class CompanyProfilePageComponent implements OnInit {
  company: Company;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.company = data.company;
    });
  }

}
