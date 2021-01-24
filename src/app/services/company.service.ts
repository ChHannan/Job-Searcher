import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from 'src/app/models/company';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl = `${environment.baseUrl}company`;

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.companyUrl);
  }

  postCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.companyUrl, company);
  }

  getCompanyById(id): Observable<Company> {
    return this.httpClient.get<Company>(`${this.companyUrl}/${id}`);
  }
}
