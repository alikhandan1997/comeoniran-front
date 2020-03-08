import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripTypesComponent } from './trip-types/trip-types.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'where-to-go', component: TripTypesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cities', component: CitiesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
