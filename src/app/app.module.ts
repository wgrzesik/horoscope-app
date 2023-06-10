import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { FormsModule } from '@angular/forms';
import { OpenHoroscopeService } from './open-horoscope.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HoroscopeDataContainerComponent } from './horoscope-data-container/horoscope-data-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HoroscopeComponent,
    HoroscopeDataContainerComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    OpenHoroscopeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
