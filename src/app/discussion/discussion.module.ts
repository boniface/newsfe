import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DiscussionRoutingModule} from './discussion-routing.module';
import {DiscussionComponent} from './pages/containers/discussion.component';


@NgModule({
  declarations: [DiscussionComponent],
  imports: [
    CommonModule,
    DiscussionRoutingModule
  ]
})
export class DiscussionModule { }
