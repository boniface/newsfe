import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesComponent } from './pages/containers/websites.component';
import { WebsiteComponent } from './pages/components/website/website.component';


@NgModule({
  declarations: [WebsitesComponent, WebsiteComponent],
  imports: [
    CommonModule,
    WebsitesRoutingModule
  ]
})
export class WebsitesModule { }
