import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlinesRoutingModule } from './headlines-routing.module';
import { HeadlinesComponent } from './pages/components/headlines/headlines.component';


@NgModule({
  declarations: [HeadlinesComponent],
  imports: [
    CommonModule,
    HeadlinesRoutingModule
  ]
})
export class HeadlinesModule { }
