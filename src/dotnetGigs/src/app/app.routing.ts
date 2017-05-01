import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);