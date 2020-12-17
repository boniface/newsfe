import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertsRoutingModule } from './adverts-routing.module';
import { AdvertsComponent } from './pages/components/adverts/adverts.component';


@NgModule({
  declarations: [AdvertsComponent],
  imports: [
    CommonModule,
    AdvertsRoutingModule
  ]
})
export class AdvertsModule { }
