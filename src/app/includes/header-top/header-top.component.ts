import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.logUser = localStorage.getItem('user');
  }
  signOut(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('auth_token');
    this.router.navigate(['/']);
  }
}
