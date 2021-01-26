import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from 'src/app/models/company';
import {Job} from 'src/app/models/job';

@Component({
  selector: 'app-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.css']
})
export class CompanyProfilePageComponent implements OnInit {
  company: Company;
  jobs: Job[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.company = data.company[0];
      this.jobs = data.company[1];
    });
  }

  manageJobs(): void {
    this.router.navigate(['/', 'jobs', 'manage'], {queryParams: {company: this.company.id}}).then();
  }
}
