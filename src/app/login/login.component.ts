import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';




@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit{
  constructor(
    private http: Http,
    private _router: Router
  )

  {
    this.http    = http;
    this._router = _router;

  }
  data: any;
  user: Array<Object>[];
  error = '';
  ngOnInit() {
    this.data = {};
    this.http.get(`/app/login/data.json`)
      .map(response => response.json().user) // <------
      .subscribe(
        data => this.user = data,
        error => console.log(error)
      );
  };
  dataForm = {};
  forSubmit() {
    var authenticatedUser = this.user.filter(u => u.email === this.data.username );
    if(authenticatedUser.length > 0 ){
      if (authenticatedUser[0].pass === this.data.password){
        localStorage.setItem("user", authenticatedUser[0].name);
        this._router.navigate(['/dashboard/catalog']);
        return true;
      }
      else{
        this.error = 'Password is incorrect';
        return false;
      }
    }
    else{
      this.error = 'Username or password is incorrect';
      return false;
    }
  }
}

