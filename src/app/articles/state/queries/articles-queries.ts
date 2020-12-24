import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {ArticlesState, ArticlesStore} from '../store/articles-store';
import {Article} from '../models/article.model';
import {ArticleService} from '../services/article.service';

@Injectable({
  providedIn: 'root'
})

export class ArticlesQueries extends QueryEntity<ArticlesState, Article> {
  constructor(
    protected store: ArticlesStore,
    private service: ArticleService
  ) {
    super(store);
  }

  public getArticle(id: string): Observable<Article> {
    return this.selectEntity(id);
  }

  public getArticles(): Observable<Article[]> {
    return this.selectAll();
  }

  public getTodayArticles(zone: string): Observable<Article[]> {
    const today: Date = new Date();
    console.log('Date: ' + today.getDate());
    return this.selectAll({
      filterBy: entity =>
        entity.site.zone === zone
    });
  }

  public getYesterdayArticles(zone: string): Observable<Article[]> {
    let yesterday = new Date();
    1;
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone
      entity.date.getDay() === yesterday.getDay()

    });
  }

  public getThisWeekArticles(zone: string): Observable<Article[]> {
    const month: Date = new Date();
    console.log('Date: ' + month.get);
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone
      // var week = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday");
      //  for (var i = 0; i < week.length; i++) {
      //  console.log(week[i]);
      //   }
    });
  }

  public getLastWeekArticles(zone: string): Observable<Article[]> {
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone
    });
  }


  public getThisMonthArticles(zone: string): Observable<Article[]> {
    const month: Date = new Date();
    console.log('Date: ' + month.getMonth());
    return this.selectAll({
      filterBy: entity => entity.site.zone === zone
    });
  }

  public getTodaySitesArticles(siteCode: string): Observable<Article[]> {
    const today: Date = new Date();
    console.log('Date: ' + today.getDate());
    return this.selectAll({
      filterBy: entity => entity.site.siteCode === siteCode
    });
  }
  public getMonthSitesArticles(siteCode: string): Observable<Article[]> {
    const month: Date = new Date();
    console.log('Date: ' + month.getMonth());
    return this.selectAll({
      filterBy: entity => entity.site.siteCode === siteCode
    });
  }

}
