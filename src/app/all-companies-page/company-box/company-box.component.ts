import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Company} from 'src/app/models/company';

@Component({
  selector: 'app-company-box',
  templateUrl: './company-box.component.html',
  styleUrls: ['./company-box.component.css']
})
export class CompanyBoxComponent implements OnInit {
  @Input() company: Company;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/company-profile', this.company.id]).then();
  }
}
