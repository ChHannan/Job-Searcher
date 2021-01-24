import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Job} from 'src/app/models/job';

@Component({
  selector: 'app-job-detail-page',
  templateUrl: './job-detail-page.component.html',
  styleUrls: ['./job-detail-page.component.css']
})
export class JobDetailPageComponent implements OnInit {
  job: Job;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.job = data.job;
    });
  }

}
