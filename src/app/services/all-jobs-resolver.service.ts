import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Job} from 'src/app/models/job';
import {JobService} from 'src/app/services/job.service';

@Injectable({
  providedIn: 'root'
})
export class AllJobsResolverService implements Resolve<Job[]>{

  constructor(private jobService: JobService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]> | Promise<Job[]> | Job[] {
    return this.jobService.getAllJobs();
  }
}
