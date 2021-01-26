import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

    this.route.data.subscribe(response => {
      this.edit = response.edit;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyById(this.id).subscribe(response => {
      this.companyForm.patchValue(response);
    });
  }

  createCompany(): void {
    this.companyService.postCompany(this.companyForm.value).subscribe(data => {
      this.router.navigate(['companies', 'manage']).then();
    });
  }

  updateCompany(): void {
    this.companyService.updateCompany(this.id, this.companyForm.value).subscribe(response => {
      this.router.navigate(['companies', 'manage']).then();
    });
  }
}
