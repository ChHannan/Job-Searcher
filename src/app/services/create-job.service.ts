import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from 'src/app/models/job';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateJobService {
  private createJobUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) { }

  postJob(job: Job): Observable<any> {
    return this.httpClient.post(this.createJobUrl, job);
  }
}
