import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticleRoutingModule} from './article-routing.module';
import {ArticlesComponent} from './pages/containers/articles/articles.component';
import {ArticleComponent} from './pages/components/views/article/article.component';
import {DateAgoPipe} from './pipe/date-ago.pipe';
import {ExcerptPipe} from './pipe/excerpt.pipe';
import {SiteArticlesComponent} from './pages/containers/site-articles/site-articles.component';
import {SingleArticleComponent} from './pages/containers/single-article/single-article.component';
import {DiscussionComponent} from './pages/containers/discussion/discussion.component';
import { HeadlinesComponent } from './pages/components/views/headlines/headlines.component';
import { SidebarComponent } from './pages/components/views/sidebar/sidebar.component';
import { SidebarStoryComponent } from './pages/components/views/sidebar-story/sidebar-story.component';
import { PostCommentComponent } from './pages/containers/discussion/forms/post-comment/post-comment.component';
import { PostResponseComponent } from './pages/containers/discussion/forms/post-response/post-response.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    DateAgoPipe,
    ExcerptPipe,
    SiteArticlesComponent,
    SingleArticleComponent,
    DiscussionComponent,
    HeadlinesComponent,
    SidebarComponent,
    SidebarStoryComponent,
    PostCommentComponent,
    PostResponseComponent
  ],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        ReactiveFormsModule,
    ],
})
export class ArticleModule {
}
