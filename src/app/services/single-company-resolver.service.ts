import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Company} from 'src/app/models/company';
import {CompanyService} from 'src/app/services/company.service';

@Injectable({
  providedIn: 'root'
})
export class SingleCompanyResolverService implements Resolve<Company> {
  constructor(private companyService: CompanyService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> | Promise<Company> | Company {
    return this.companyService.getCompanyById(route.params.id);
  }
}
