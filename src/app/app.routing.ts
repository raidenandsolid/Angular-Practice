import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';

const routes: Routes = [
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

// Test