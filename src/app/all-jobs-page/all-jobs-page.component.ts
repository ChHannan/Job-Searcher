import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Job} from 'src/app/models/job';

@Component({
  selector: 'app-all-jobs-page',
  templateUrl: './all-jobs-page.component.html',
  styleUrls: ['./all-jobs-page.component.css']
})
export class AllJobsPageComponent implements OnInit {
  jobs: Job[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.jobs = data.jobs;
    });
  }

}
