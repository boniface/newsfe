import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/general/home/home.component';
import {NotFoundComponent} from './modules/general/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from './articles/state/services/articles/article.service';
import {ZONE} from './shared/util/Utils';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export function appInit(articleService: ArticleService) {
  return () => articleService.getInitialData(ZONE).subscribe();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ArticleService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [ArticleService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
