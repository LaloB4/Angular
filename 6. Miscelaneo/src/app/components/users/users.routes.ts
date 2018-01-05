import {Routes} from '@angular/router';

import {UsernewComponent} from './usernew.component';
import {UserdeleteComponent} from './userdelete.component';
import {UserdetailsComponent} from './userdetails.component';


export const USER_ROUTES: Routes = [
  {path: 'new', component: UsernewComponent},
  {path: 'delete', component: UserdeleteComponent},
  {path: 'details', component: UserdetailsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'new' }
];
