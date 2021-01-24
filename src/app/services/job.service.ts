import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job} from 'src/app/models/job';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobUrl = `${environment.baseUrl}job`;

  constructor(private httpClient: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.jobUrl);
  }

  getJobById(id): Observable<Job> {
    return this.httpClient.get<Job>(`${this.jobUrl}/${id}`);
  }

  postJob(job: Job): Observable<any> {
    return this.httpClient.post(this.jobUrl, job);
  }
}
