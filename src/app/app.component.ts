import { Component } from '@angular/core';
import {MenuLeftComponent} from  './includes/menu-left/menu-left.component'
import {HeaderTopComponent} from  './includes/header-top/header-top.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [MenuLeftComponent, HeaderTopComponent]
})
export class AppComponent {
  title = 'app works!';
}
