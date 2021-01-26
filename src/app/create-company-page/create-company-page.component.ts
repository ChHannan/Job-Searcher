import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from 'src/app/services/company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-company-page',
  templateUrl: './create-company-page.component.html',
  styleUrls: ['./create-company-page.component.css']
})
export class CreateCompanyPageComponent implements OnInit {
  companyForm: FormGroup;
  edit = false;
  id: string;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      employee_count: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
    });

    this.route.data.subscribe(response => {
      this.edit = response.edit;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyById(this.id).subscribe(response => {
      this.companyForm.patchValue(response);
    });
  }

  createCompany(): void {
    if (this.companyForm.valid) {
      this.companyService.postCompany(this.companyForm.value).subscribe(data => {
        this.router.navigate(['companies', 'manage']).then();
      });
    } else {
      alert('All fields are mandatory');
    }
  }

  updateCompany(): void {
    if (this.companyForm.valid) {
      this.companyService.updateCompany(this.id, this.companyForm.value).subscribe(response => {
        this.router.navigate(['companies', 'manage']).then();
      });
    } else {
      alert('All fields are mandatory');
    }
  }
}
