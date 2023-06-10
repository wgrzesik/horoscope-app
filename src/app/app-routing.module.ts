import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopeDataContainerComponent } from './horoscope-data-container/horoscope-data-container.component';
import {MockLoginComponent} from './mock-login/mock-login.component';

const routes: Routes = [
  {
  path: 'horoscope',
  component: HoroscopeDataContainerComponent
  },
  { path: 'login', component: MockLoginComponent },
  { path: '', redirectTo: '/horoscope', pathMatch: 'full' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
