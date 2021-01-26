import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from 'src/app/models/company';
import {Job} from 'src/app/models/job';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../models/user';

@Component({
  selector: 'app-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.css']
})
export class CompanyProfilePageComponent implements OnInit {
  company: Company;
  jobs: Job[];
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.route.data.subscribe(data => {
      this.company = data.company[0];
      this.jobs = data.company[1];
    });
  }

  manageJobs(): void {
    this.router.navigate(['/', 'jobs', 'manage'], {queryParams: {company: this.company.id}}).then();
  }

  browseJobs(): void {
    this.router.navigate(['/', 'jobs',], {queryParams: {company: this.company.id}}).then();
  }
}
