import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {PriceComponent} from './components/price/price.component';
import {ProtectedComponent} from './components/protected/protected.component';

import {AuthGuardService} from './service/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'price', component: PriceComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate:[AuthGuardService] 
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
