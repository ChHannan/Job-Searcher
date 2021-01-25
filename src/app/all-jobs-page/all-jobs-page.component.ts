import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Job} from 'src/app/models/job';
import {FormControl, FormGroup} from '@angular/forms';
import {JobService} from '../services/job.service';

@Component({
  selector: 'app-all-jobs-page',
  templateUrl: './all-jobs-page.component.html',
  styleUrls: ['./all-jobs-page.component.css']
})
export class AllJobsPageComponent implements OnInit {
  jobs: Job[];
  searchJobFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private jobService: JobService) {
  }

  ngOnInit(): void {
    this.searchJobFormGroup = new FormGroup({
      title: new FormControl(),
      type: new FormControl('All')
    });

    this.route.queryParams.subscribe(params => {
      this.searchJobFormGroup.patchValue({
        title: params.title,
        type: params.type
      });

      this.searchJob();
    });
  }

  searchJob(): void {
    let title = this.searchJobFormGroup.controls.title.value;
    let type = this.searchJobFormGroup.controls.type.value;

    if (title === null || title === undefined) {
      title = '';
    }
    if (type === 'All' || type === undefined) {
      type = '';
    }

    this.jobService.getJobByTitleAndType(title, type).subscribe(response => {
      this.jobs = response;
    });
  }
}
