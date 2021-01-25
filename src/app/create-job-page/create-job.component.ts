import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Company} from 'src/app/models/company';
import {JobService} from 'src/app/services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  jobForm: FormGroup;
  companies: Company[];

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.companies = data.companies;
    });
    this.jobForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl('Full Time'),
      location: new FormControl(''),
      experience: new FormControl(''),
      salary: new FormControl(''),
      company_id: new FormControl(this.companies[0].id),
      email: new FormControl(''),
      phone: new FormControl(''),
      contact_location: new FormControl(''),
    });
  }

  createJob(): void {
    this.jobService.postJob(this.jobForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
