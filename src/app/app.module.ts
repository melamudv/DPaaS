import { routing, appRoutingProviders } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './dashboard/catalog/catalog.component';
import { MenuLeftComponent } from './includes/menu-left/menu-left.component';
import { HeaderTopComponent } from './includes/header-top/header-top.component';
import { SearchUserPipe } from './login/search-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    MenuLeftComponent,
    HeaderTopComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})



export class AppModule { }
