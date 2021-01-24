import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Company} from 'src/app/models/company';
import {CompanyService} from 'src/app/services/company.service';

@Component({
  selector: 'app-all-companies-page',
  templateUrl: './all-companies-page.component.html',
  styleUrls: ['./all-companies-page.component.css']
})
export class AllCompaniesPageComponent implements OnInit {
  companies: Company[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.companies = data.companies;
    });
  }

}
