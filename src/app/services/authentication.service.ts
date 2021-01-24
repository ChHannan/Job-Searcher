import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Token} from 'src/app/models/token';
import {CreateUser, User} from 'src/app/models/user';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signUpUrl = `${environment.baseUrl}user`;
  private signInUrl = `${environment.baseUrl}auth`;
  private tokenSubject: BehaviorSubject<any>;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): Token {
    return this.tokenSubject.value;
  }

  signUp(user: CreateUser): void {
    this.httpClient.post(this.signUpUrl, user).subscribe(() => {
      this.login({email: user.email, password: user.password}).subscribe();
    });
  }

  login(user: { email: string, password: string }): Observable<any> {
    return this.httpClient.post(this.signInUrl, user).pipe(map((tokenObject: Token) => {
      localStorage.setItem('token', JSON.stringify(tokenObject));
      this.tokenSubject.next(tokenObject);
    })).pipe(map(() => {
      this.httpClient.get(this.signUpUrl).subscribe((currentUser: User) => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
        this.router.navigate(['/home']).then();
      });
    }));
  }

  logout(): void {
    this.router.navigate(['/']).then(() => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
      this.tokenSubject.next(null);
    });
  }
}
