import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobApplication} from '../models/job-application';
import {JobApplicationService} from '../services/job-application.service';

@Component({
  selector: 'app-manage-resume-page',
  templateUrl: './manage-resume-page.component.html',
  styleUrls: ['./manage-resume-page.component.css']
})
export class ManageResumePageComponent implements OnInit {
  jobId: string;
  jobApplications: JobApplication[];

  constructor(private route: ActivatedRoute, private jobApplicationService: JobApplicationService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobId = params.job;
      if (this.jobId) {
        this.jobApplications = this.jobApplications.filter(jobApplication => {
          return jobApplication.job.id.toString() === this.jobId;
        });
      }
    });

    this.jobApplicationService.getJobApplications().subscribe(response => {
      this.jobApplications = response;
    });
  }
}
