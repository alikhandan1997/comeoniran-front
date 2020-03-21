import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripTypesComponent } from './trip-types/trip-types.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CitiesComponent } from './cities/cities.component';
import { RegisterComponent } from './login/register/register.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { LeadersComponent } from './leaders/leaders/leaders.component';
import { LeaderDetailComponent } from './leaders/leaders-detail/leader-detail.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsDetailComponent } from './hotels/hotels-detail/hotels-detail.component';
import { ToursComponent } from './tours/tours/tours.component';
import { ToursDetailComponent } from './tours/tours-detail/tours-detail.component';


const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'destinations', component: DestinationsComponent },
  { path: 'where-to-go', component: TripTypesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'leaders', component: LeadersComponent },
  { path: 'leaders/:leaderName' , component: LeaderDetailComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:hotelName', component: HotelsDetailComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:tourName', component: ToursDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
