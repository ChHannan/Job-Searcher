import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {JobService} from '../services/job.service';
import {Job} from '../models/job';
import {CompanyService} from '../services/company.service';
import {Company} from '../models/company';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  searchJobFormGroup: FormGroup;
  jobs: Job[];
  companies: Company[];

  constructor(private router: Router, private jobService: JobService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.searchJobFormGroup = new FormGroup({
      title: new FormControl(),
      type: new FormControl('All')
    });

    this.jobService.getAllJobs().subscribe(response => {
      this.jobs = response.slice(0, 3);
    });
    this.companyService.getAllCompanies().subscribe(response => {
      this.companies = response.slice(0, 5);
    });
  }

  searchJob(): void {
    this.router.navigate(['jobs'], {queryParams: this.searchJobFormGroup.value}).then();
  }
}
