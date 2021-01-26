import {Component, OnInit} from '@angular/core';
import {JobApplicationService} from '../services/job-application.service';
import {ActivatedRoute} from '@angular/router';
import {JobApplication} from '../models/job-application';

@Component({
  selector: 'app-resume-detail-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  jobApplication: JobApplication;

  constructor(private jobApplicationService: JobApplicationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.jobApplicationService.getJobApplicationById(id).subscribe(response => {
      this.jobApplication = response;
    });
  }

  hireDialog(): void {
    window.alert(`Email at ${this.jobApplication.applicant.email} to get in touch with the applicant!`);
  }
}
