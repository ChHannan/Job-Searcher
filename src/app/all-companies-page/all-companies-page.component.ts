import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Company} from 'src/app/models/company';
import {CompanyService} from 'src/app/services/company.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-all-companies-page',
  templateUrl: './all-companies-page.component.html',
  styleUrls: ['./all-companies-page.component.css']
})
export class AllCompaniesPageComponent implements OnInit {
  companies: Company[];
  filteredCompanies: Company[];
  searchCompanyFormGroup: FormGroup;
  manage = false;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.searchCompanyFormGroup = new FormGroup({
      title: new FormControl()
    });

    this.route.data.subscribe((data) => {
      this.companies = data.companies;
      this.manage = data.manage;

      if (this.manage) {
        this.companies = this.companies.filter(company => {
          return company.user.id === this.authService.currentUserValue.id;
        });
      }
      this.filteredCompanies = this.companies;
    });
  }

  searchCompany(): void {
    this.filteredCompanies = this.companies.filter(company => {
      return company.name.startsWith(this.searchCompanyFormGroup.controls.title.value);
    });
  }
}
