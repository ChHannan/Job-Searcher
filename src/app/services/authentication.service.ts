import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreateUser} from 'src/app/models/user';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signUpUrl = `${environment.baseUrl}user`;
  private signInUrl = `${environment.baseUrl}auth`;
  constructor(private httpClient: HttpClient) { }

  signUp(user: CreateUser): Observable<any> {
    return this.httpClient.post(this.signUpUrl, user);
  }

  login(user: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(this.signInUrl, user);
  }
}
