import { routing, appRoutingProviders } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular2-calendar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './dashboard/catalog/catalog.component';
import { MenuLeftComponent } from './includes/menu-left/menu-left.component';
import { HeaderTopComponent } from './includes/header-top/header-top.component';
import { DRecoveryComponent } from './dashboard/d-recovery/d-recovery.component';
import { AvailableBackupsComponent } from './dashboard/d-recovery/available-backups/available-backups.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    MenuLeftComponent,
    HeaderTopComponent,
    DRecoveryComponent,
    AvailableBackupsComponent
    // DatePicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    CalendarModule.forRoot()
    // ScheduleModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})



export class AppModule { }
