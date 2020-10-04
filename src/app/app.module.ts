import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DestinationsComponent } from './modules/destinations/destinations/destinations.component';
import { TripTypesComponent } from './modules/trip-types/trip-types/trip-types.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LeadersComponent } from './modules/leaders/leaders/leaders.component';
import { HotelsComponent } from './modules/hotels/hotels/hotels.component';
import { ToursComponent } from './modules/tours/tours/tours.component';
import { HotelsDetailComponent } from './modules/hotels/hotels-detail/hotels-detail.component';
import { ToursDetailComponent } from './modules/tours/tours-detail/tours-detail.component';
import { LeaderDetailComponent } from './modules/leaders/leaders-detail/leader-detail.component';
import { DestinationDetailComponent } from './modules/destinations/destination-detail/destination-detail.component';
import { TripTypeDetailComponent } from './modules/trip-types/trip-type-detail/trip-type-detail.component';
import { MainComponent } from './layouts/main/main.component';
import { ListServicesComponent } from './modules/list-services/list-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    DestinationsComponent,
    TripTypesComponent,
    AboutUsComponent,
    LeadersComponent,
    HotelsComponent,
    ToursComponent,
    HotelsDetailComponent,
    ToursDetailComponent,
    LeaderDetailComponent,
    DestinationDetailComponent,
    TripTypeDetailComponent,
    MainComponent,
    ListServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
