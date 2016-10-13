import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './dashboard/catalog/catalog.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/catalog', component: CatalogComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
