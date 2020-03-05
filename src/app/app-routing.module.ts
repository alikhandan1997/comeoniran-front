import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripTypesComponent } from './trip-types/trip-types.component';

const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'triptypes', component: TripTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
