import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesComponent } from './pages/containers/websites.component';
import { WebsiteComponent } from './pages/components/website/website.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [WebsitesComponent, WebsiteComponent],
  imports: [
    CommonModule,
    WebsitesRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class WebsitesModule { }
