import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { FormsModule } from '@angular/forms';
import { OpenHoroscopeService } from './open-horoscope/open-horoscope.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HoroscopeDataContainerComponent } from './horoscope-data-container/horoscope-data-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NumerologyComponent } from './numerology/numerology.component';

@NgModule({
  declarations: [
    AppComponent,
    HoroscopeComponent,
    HoroscopeDataContainerComponent,
    NavBarComponent,
    NumerologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    OpenHoroscopeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
