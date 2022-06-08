import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isDisabled = true;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm.statusChanges.subscribe(result => {
      if (result === 'INVALID') {
        this.isDisabled = true;
      } else if (result === 'VALID') {
        this.isDisabled = false;
      }
    });
  }

  onLogin() {
    this.userService.login(this.loginForm.value).subscribe(response => {
      if (response instanceof Error) {
        console.log('Please check your email or password');
      } else {
        console.log('SUCCESS');
        this.router.navigate(['home']);
      }
    });
    console.log(this.loginForm.value);
  }
}
