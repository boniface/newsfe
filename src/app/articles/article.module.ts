import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticlesComponent } from './pages/containers/articles.component';
import { ArticleComponent } from './pages/components/article/article.component';
import { DateAgoPipe } from './pipe/date-ago.pipe';
import { ExcerptPipe } from './pipe/excerpt.pipe';



@NgModule({
  declarations: [ArticlesComponent, ArticleComponent, DateAgoPipe, ExcerptPipe],
    imports: [
        CommonModule,
        ArticleRoutingModule,
    ]
})
export class ArticleModule { }
