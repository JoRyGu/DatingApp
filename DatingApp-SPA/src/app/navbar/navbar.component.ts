import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully.');
    }, error => {
      console.log('Failed to login.');
    });
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    if (this.isLoggedIn()) {
      localStorage.removeItem('token');
    }

    console.log('Logged Out');
  }
}
