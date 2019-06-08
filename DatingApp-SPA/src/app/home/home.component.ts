import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerIsVisible = false;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  registerToggle() {
    this.registerIsVisible = !this.registerIsVisible;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerIsVisible = registerMode;
  }
}
