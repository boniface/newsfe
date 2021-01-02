import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from './pages/containers/articles/articles.component';
import {SiteArticlesComponent} from './pages/containers/site-articles/site-articles.component';
import {SingleArticleComponent} from './pages/containers/single-article/single-article.component';

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'website/:sitecode', component: SiteArticlesComponent, pathMatch: 'full'},
  {path: 'website/:sitecode', component: SiteArticlesComponent, pathMatch: 'full'},
  {path: 'news/:seo/:id', component: SingleArticleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
