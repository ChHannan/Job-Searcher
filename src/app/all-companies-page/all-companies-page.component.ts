import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/models/company';
import {CompanyService} from 'src/app/services/company.service';

@Component({
  selector: 'app-all-companies-page',
  templateUrl: './all-companies-page.component.html',
  styleUrls: ['./all-companies-page.component.css']
})
export class AllCompaniesPageComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

}
