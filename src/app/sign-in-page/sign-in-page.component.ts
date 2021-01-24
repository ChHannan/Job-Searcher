import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  singInForm: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  signInUser(): void {
    this.authService.login(this.singInForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
