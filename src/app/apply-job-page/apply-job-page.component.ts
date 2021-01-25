import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {JobApplicationService} from 'src/app/services/job-application.service';

@Component({
  selector: 'app-apply-job-page',
  templateUrl: './apply-job-page.component.html',
  styleUrls: ['./apply-job-page.component.css']
})
export class ApplyJobPageComponent implements OnInit {
  jobApplicationForm: FormGroup;
  jobId: string;

  constructor(private jobApplicationService: JobApplicationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params.id;
    this.jobApplicationForm = new FormGroup({
      experience: new FormControl(''),
      salary: new FormControl(''),
      cover_letter: new FormControl(''),
      info: new FormControl(''),
    });
  }

  createJobApplication(): void {
    this.jobApplicationForm.value.job_id = this.jobId;
    this.jobApplicationService.postJobApplication(this.jobApplicationForm.value).subscribe();
  }

}
