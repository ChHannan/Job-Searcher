import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {Company} from 'src/app/models/company';
import {Job} from 'src/app/models/job';
import {CompanyService} from 'src/app/services/company.service';
import {JobService} from 'src/app/services/job.service';

@Injectable({
  providedIn: 'root'
})
export class SingleCompanyResolverService implements Resolve<[Company, Job[]]> {
  constructor(private companyService: CompanyService, private jobService: JobService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[Company, Job[]]> |
    Promise<[Company, Job[]]> | [Company, Job[]] {
    return forkJoin([this.companyService.getCompanyById(route.params.id),
      this.jobService.getJobsByCompany(route.params.id)]);
  }

}
