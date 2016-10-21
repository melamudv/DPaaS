import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './dashboard/catalog/catalog.component';
import { DRecoveryComponent } from './dashboard/d-recovery/d-recovery.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/catalog', component: CatalogComponent },
  { path: 'dashboard/d-recovery', component: DRecoveryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
