import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticleRoutingModule} from './article-routing.module';
import {ArticlesComponent} from './pages/containers/articles/articles.component';
import {ArticleComponent} from './pages/components/article/article.component';
import {DateAgoPipe} from './pipe/date-ago.pipe';
import {ExcerptPipe} from './pipe/excerpt.pipe';
import {SiteArticlesComponent} from './pages/containers/site-articles/site-articles.component';
import {SingleArticleComponent} from './pages/containers/single-article/single-article.component';
import {DiscussionComponent} from './pages/containers/discussion/discussion.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    DateAgoPipe,
    ExcerptPipe,
    SiteArticlesComponent,
    SingleArticleComponent,
    DiscussionComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule {
}
