import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      type: new FormControl('candidate'),
    });
  }

  createUser(): void {
    this.authService.signUp(this.signUpForm.value);
  }
}
