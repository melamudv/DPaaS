import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Component({
  selector: 'app-d-recovery',
  templateUrl: './d-recovery.component.html',
  styleUrls: ['./d-recovery.component.css']
})
export class DRecoveryComponent implements OnInit {

  constructor(
    private http: Http,
    private _router: Router
  )
  {
    this.http    = http;
    this._router = _router;

  }
  data: any;
  DataVM: Array<Object>[];
  ngOnInit(){
    this.data = {};
    this.http.get(`/app/dashboard/d-recovery/dataVM.json`)
      .map(response => response.json().DataVM)
      .subscribe(
        data => this.DataVM = data,
        error => console.log(error)
      );
  };
}
