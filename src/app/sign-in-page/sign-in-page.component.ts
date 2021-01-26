import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signInUser(): void {
    if (this.singInForm.valid) {
      this.authService.login(this.singInForm.value).subscribe(() => {}, error => {
        alert('Please provide valid credentials');
      });
    } else {
      if (this.singInForm.get('email').valid) {
        alert('All fields are mandatory');
      } else {
        alert('Please provide valid email');
      }
    }
  }
}
