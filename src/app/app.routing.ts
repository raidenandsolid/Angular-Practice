import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { RegisterComponent } from './register';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
