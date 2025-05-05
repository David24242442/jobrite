import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'about', component: LandingpageComponent }, // Replace with actual component when available
  { path: 'services', component: LandingpageComponent }, // Replace with actual component when available
  { path: 'contact', component: LandingpageComponent }, // Replace with actual component when available
  { path: '**', redirectTo: 'home' } // Wildcard route for 404
];

