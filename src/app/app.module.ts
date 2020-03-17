import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripTypesComponent } from './trip-types/trip-types.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CitiesComponent } from './cities/cities.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LeadersComponent } from './leaders/leaders.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ToursComponent } from './tours/tours.component';

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
    ToursComponent
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
