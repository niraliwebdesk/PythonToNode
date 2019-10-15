import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../../services/auth.service';  

@Component({
  selector: 'app-base-dashboard',
  templateUrl: './base-dashboard.component.html',
  styleUrls: ['./base-dashboard.component.css']
})
export class BaseDashboardComponent implements OnInit {
  id: string; 
  constructor(
    private router: Router, private authService: AuthService

  ) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');  

  }
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['']);  
  } 

}
