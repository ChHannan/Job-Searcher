import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {JobApplication} from 'src/app/models/job-application';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private jobApplicationUrl = `${environment.baseUrl}job-application`;

  constructor(private httpClient: HttpClient) { }

  postJobApplication(jobApplication: JobApplication): Observable<any> {
    return this.httpClient.post(this.jobApplicationUrl, jobApplication);
  }
}
