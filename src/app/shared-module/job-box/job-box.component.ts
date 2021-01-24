import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Job} from 'src/app/models/job';

@Component({
  selector: 'app-job-box',
  templateUrl: './job-box.component.html',
  styleUrls: ['./job-box.component.css']
})
export class JobBoxComponent implements OnInit {
  @Input() job: Job;
  jobTypeClass = 'full-time';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.job.type === 'Part Time') {
      this.jobTypeClass = 'part-time';
    } else if (this.job.type === 'Internship') {
      this.jobTypeClass = 'internship';
    } else if (this.job.type === 'Contract') {
      this.jobTypeClass = 'freelanc';
    }
  }

  navigate(): void {
    this.router.navigate(['/job-detail', this.job.id]).then();
  }
}
