import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from 'src/app/models/company';
import {JobService} from 'src/app/services/job.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  jobForm: FormGroup;
  companies: Company[];
  companyId: string;

  edit = false;
  jobId: string;

  constructor(private route: ActivatedRoute, private jobService: JobService,
              private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.companies = data.companies.filter(company => {
        return company.user.id === this.authService.currentUserValue.id;
      });
    });
    this.jobForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      type: new FormControl('Full Time', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      company_id: new FormControl(this.companies[0].id, [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      contact_location: new FormControl('', [Validators.required]),
    });

    this.route.queryParams.subscribe(params => {
      this.companyId = params.company ?? this.companies[0].id;
      this.jobForm.patchValue({company_id: this.companyId});
    });

    this.route.data.subscribe(data => {
      this.edit = data.edit;
      if (this.edit) {
        this.jobId = this.route.snapshot.paramMap.get('id');
        this.jobService.getJobById(this.jobId).subscribe(response => {
          this.jobForm.patchValue(response);
        });
      }
    });
  }

  createJob(): void {
    if (this.jobForm.valid) {
      this.jobService.postJob(this.jobForm.value).subscribe(data => {
        this.router.navigate(['/', 'jobs', 'manage'], {queryParams: {company: this.companyId}}).then();
      });
    } else {
      alert('All fields are mandatory');
    }
  }

  updateJob(): void {
    if (this.jobForm.valid) {
      this.jobService.updateJob(this.jobId, this.jobForm.value).subscribe(response => {
        this.router.navigate(['/', 'job-detail', this.jobId]).then();
      });
    } else {
      alert('All fields are mandatory');
    }
  }
}
