import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Company} from 'src/app/models/company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-company-box',
  templateUrl: './company-box.component.html',
  styleUrls: ['./company-box.component.css']
})
export class CompanyBoxComponent implements OnInit {
  @Input() company: Company;
  @Input() manage = false;

  constructor(private router: Router, private companyService: CompanyService) {
  }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/company-profile', this.company.id]).then();
  }

  editCompany(): void {
    this.router.navigate(['..', 'company', 'edit', this.company.id]).then();
  }

  deleteCompany(): void {
    if (window.confirm(`Are you sure you want to delete ${this.company.name}?`)) {
      this.companyService.deleteCompany(this.company.id).subscribe(response => {
        window.location.reload();
      });
    }
  }
}
