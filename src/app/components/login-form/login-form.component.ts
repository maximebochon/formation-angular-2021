import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { CONSTANTS } from 'src/app/constants';
import { AuthCredentials } from 'src/app/services/model/auth-credentials.model';
import { AuthToken } from 'src/app/services/model/auth-token.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(credentials: AuthCredentials): void {
    this.authService.login(credentials).subscribe(
      (authToken: AuthToken) => {
        localStorage.setItem('auth-token-id', authToken.id);
        this.router.navigate(['cv']);
      }
    );
  }

}
