import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './modules/footer/footer.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripTypesComponent } from './trip-types/trip-types.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CitiesComponent } from './cities/cities.component';
import { RegisterComponent } from './login/register/register.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { LeadersComponent } from './leaders/leaders/leaders.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { ToursComponent } from './tours/tours/tours.component';
import { HotelsDetailComponent } from './hotels/hotels-detail/hotels-detail.component';
import { ToursDetailComponent } from './tours/tours-detail/tours-detail.component';
import { LeaderDetailComponent } from './leaders/leaders-detail/leader-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    DestinationsComponent,
    TripTypesComponent,
    AboutUsComponent,
    CitiesComponent,
    RegisterComponent,
    ResetPasswordComponent,
    LeadersComponent,
    HotelsComponent,
    ToursComponent,
    HotelsDetailComponent,
    ToursDetailComponent,
    LeaderDetailComponent
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
