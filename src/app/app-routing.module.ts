import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './modules/home-page/home-page.component';
import { DestinationsComponent } from './modules/destinations/destinations/destinations.component';
import { DestinationDetailComponent } from './modules/destinations/destination-detail/destination-detail.component';
import { TripTypesComponent } from './modules/trip-types/trip-types/trip-types.component';
import { TripTypeDetailComponent } from './modules/trip-types/trip-type-detail/trip-type-detail.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LeadersComponent } from './modules/leaders/leaders/leaders.component';
import { LeaderDetailComponent } from './modules/leaders/leaders-detail/leader-detail.component';
import { HotelsComponent } from './modules/hotels/hotels/hotels.component';
import { HotelsDetailComponent } from './modules/hotels/hotels-detail/hotels-detail.component';
import { ToursComponent } from './modules/tours/tours/tours.component';
import { ToursDetailComponent } from './modules/tours/tours-detail/tours-detail.component';



const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destinations/:cityName', component: DestinationDetailComponent },
  { path: 'trip-types', component: TripTypesComponent },
  { path: 'trip-types/:trip-type', component: TripTypeDetailComponent },
  { path: 'about-us', component: AboutUsComponent },
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
