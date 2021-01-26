import {Component, Input, OnInit} from '@angular/core';
import {JobApplication} from '../../models/job-application';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume-box',
  templateUrl: './resume-box.component.html',
  styleUrls: ['./resume-box.component.css']
})
export class ResumeBoxComponent implements OnInit {
  @Input() jobApplication: JobApplication;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToJobApplicationDetail(): void {
    this.router.navigate(['/', 'job-application', this.jobApplication.id]).then();
  }
}
