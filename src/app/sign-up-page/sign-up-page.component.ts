import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      type: new FormControl('candidate', [Validators.required]),
    });
  }

  createUser(): void {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value);
    } else {
      if (this.signUpForm.get('email').valid) {
        alert('All fields are mandatory');
      } else {
        alert('Please provide valid email');
      }
    }
  }
}
