import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  companyId: string;
  manage = false;

  constructor(private route: ActivatedRoute, private jobService: JobService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.manage = data.manage;
    });

    this.searchJobFormGroup = new FormGroup({
      title: new FormControl(),
      type: new FormControl('All')
    });

    this.route.queryParams.subscribe(params => {
      this.companyId = params.company;
      this.searchJobFormGroup.patchValue({
        title: params.title,
        type: params.type ?? 'All'
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
      if (this.companyId) {
        this.jobs = response.filter(job => {
          return job.company.id.toString() === this.companyId;
        });
      } else {
        this.jobs = response;
      }
    });
  }

  navigateToCreateJob(): void {
    this.router.navigate(['/', 'job', 'create'], {queryParams: {company: this.companyId}});
  }
}
