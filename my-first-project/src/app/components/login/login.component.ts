import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from '../../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = { username: "admin", password: "admin@321" }
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  // user_name: any;
  // password: any;
  // error: any;
  // issubmit: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/admin';
    this.authService.logout();
  }
  get f() { return this.loginForm.controls; }  
  login() {  
    console.log("called method!!!")
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
      console.log("form invalid")
       return;  
    }  
    else {  
      console.log("username :: ", this.f.username)
       if (this.f.username.value == this.model.username && this.f.password.value == this.model.password) {  
       console.log("Login successful");  
       //this.authService.authLogin(this.model);  
       localStorage.setItem('isLoggedIn', "true");  
       localStorage.setItem('token', this.f.username.value);  
       this.router.navigate([this.returnUrl]);  
       }  
    else {  
       this.message = "Please check your username and password";  
       }  
      }  
   }  
}
