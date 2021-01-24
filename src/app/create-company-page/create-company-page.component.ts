import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from 'src/app/models/user';
import {CompanyService} from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company-page',
  templateUrl: './create-company-page.component.html',
  styleUrls: ['./create-company-page.component.css']
})
export class CreateCompanyPageComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      email: new FormControl(''),
      location: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      logo: new FormControl(''),
      employee_count: new FormControl(''),
      about: new FormControl(''),
    });
  }

  createCompany(): void {
    this.companyService.postCompany(this.companyForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
