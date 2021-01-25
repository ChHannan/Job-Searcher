import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {JobApplicationService} from 'src/app/services/job-application.service';

@Component({
  selector: 'app-apply-job-page',
  templateUrl: './apply-job-page.component.html',
  styleUrls: ['./apply-job-page.component.css']
})
export class ApplyJobPageComponent implements OnInit {
  jobApplicationForm: FormGroup;

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.jobApplicationForm = new FormGroup({
      experience: new FormControl(''),
      salary: new FormControl(''),
      cover_letter: new FormControl(''),
      info: new FormControl(''),
    });
  }

  createJobApplication(): void {
    console.log(this.jobApplicationForm.value);
    this.jobApplicationService.postJobApplication(this.jobApplicationForm.value).subscribe(data => {
      console.log(data);
    });
  }

}

// "Experienced in developing apps with react and angular."
