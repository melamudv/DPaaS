// import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import { AlertService, SearchUserPipe } from 'search-user.pipe';
import 'rxjs/add/operator/map';

import { Router, ROUTER_DIRECTIVES  } from '@angular/router';




@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  directives: [ROUTER_DIRECTIVES ]
})



export class LoginComponent implements OnInit{
  constructor(
    private http: Http,
    private _router: Router
    // private searchUserPipe: SearchUserPipe,
    // private alertService: AlertService
  )

  {
    this.http    = http;
    this._router = _router;

  }
  data: any;
  loggedIn: any;
  result: Object;
  user: Array<Object>[];
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
  forSubmit(){
    console.log("users",this.user);
    var authenticatedUser = this.user.filter(u => u.email === this.data.username );
    if (authenticatedUser[0].pass === this.data.password){
      localStorage.setItem("user", authenticatedUser[0].name);
      this._router.navigate(['/dashboard/catalog']);
      return true;
    }


    // if(this.data.username == 'admin' && this.data.password == 'admin'){
    //   this._router.navigate(['/dashboard/catalog']);
    // }
    // else if (this.data.username == 'Annie@acme' && this.data.password == 'Annie@acme'){
    //   localStorage.setItem('auth_token', 'annie');
    //   localStorage.setItem('id_token', 'annie');
    //   this.loggedIn = true;
    //   this._router.navigate(['/dashboard/catalog']);
    // }
    // else if (this.data.username == 'Ian@acme' && this.data.password == 'Ian@acme'){
    //   localStorage.setItem('auth_token', 'ian');
    //   localStorage.setItem('id_token', 'ian');
    //   this.loggedIn = true;
    //   this._router.navigate(['/policies/data-protection']);
    // }
    // else{
    //   console.log('Who the f are you');
    // }

    // this.loading = true;
    // this.searchUserPipe.login(this.data.username, this.data.password)
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['/']);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });

  }

}

