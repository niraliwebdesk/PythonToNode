import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';  

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  id: string; 
  constructor(
    private router: Router, private authService: AuthService,private location: Location


  ) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');  

  }
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['']);  
  } 
  onCancelClick() {
    this.location.back();
  }

}
