import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Job} from 'src/app/models/job';
import {AuthenticationService} from '../services/authentication.service';
import {JobService} from '../services/job.service';
import {User} from '../models/user';
import {JobApplicationService} from '../services/job-application.service';
import {JobApplication} from '../models/job-application';

@Component({
  selector: 'app-job-detail-page',
  templateUrl: './job-detail-page.component.html',
  styleUrls: ['./job-detail-page.component.css']
})
export class JobDetailPageComponent implements OnInit {
  job: Job;
  isEmployee = false;
  user: User;
  jobApplications: JobApplication[];

  constructor(private route: ActivatedRoute, private router: Router,
              private authService: AuthenticationService, private jobService: JobService,
              private jobApplicationService: JobApplicationService) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.isEmployee = this.authService.currentUserValue.type === 'employee';
    this.route.data.subscribe(data => {
      this.job = data.job;
    });

    if (!this.isEmployee) {
      this.jobApplicationService.getJobApplications().subscribe(jobApplications => {
        this.jobApplications = jobApplications.filter(jobApplication => {
          return jobApplication.job.id === this.job.id;
        });
      });
    }
  }

  navigateToApplyJob(): void {
    this.router.navigate(['/job-apply', this.job.id]).then();
  }

  navigateToViewApplication(): void {
    this.router.navigate(['/', 'job-application', this.jobApplications[0].id]).then();
  }

  navigateToViewApplications(): void {
    this.router.navigate(['/', 'job-applications', 'manage'], {queryParams: {job: this.job.id}}).then();
  }

  editJob(): void {
    this.router.navigate(['/', 'job', 'edit', this.job.id]);
  }

  deleteJob(): void {
    if (window.confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(this.job.id).subscribe(response => {
        this.router.navigate(['/', 'jobs', 'manage'], {queryParams: {company: this.job.company.id}}).then();
      });
    }
  }
}
