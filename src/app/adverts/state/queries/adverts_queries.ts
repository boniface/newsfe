import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {WebsiteState, WebsiteStore} from '../../../websites/state/store/website-store';
import {Website} from '../../../websites/state/models/website.model';
import {WebsiteService} from '../../../websites/state/services/website-service';
import {Observable} from 'rxjs';
import { Adverts } from '../models/adverts';
import { AdvertsService } from '../services/adverts.service';


@Injectable({
  providedIn: 'root'
})

export class AdvertsQueries extends QueryEntity<AdvertsState, Adverts> {
  constructor(
    protected store: AdvertsStore,
    private service: AdvertsService
  ) {
    super(store);
  }

  public getTodayStories(zone: string,): Observable<Website> {
    const id = zone + ',' + siteCode;
    if (this.hasEntity(id) === false) {
      this.service.getEntities();
      return this.selectEntity(id);
    }
    return this.selectEntity(id);
  }

  public getWebsites(): Observable<Website[]> {
    if (this.hasEntity() === false) {
      return  this.service.getEntities();
    }
    return this.service.getEntities();
  }

  public getZoneSites(zone: string): Observable<Website[]> {
    if (this.hasEntity(zone) === false) {
      this.service.getEntities();
      return this.selectAll({
        filterBy: entity => entity.zone === zone
      });
    }
    return this.selectAll({
      filterBy: entity => entity.zone === zone
    });
  }

}


//override def routes: Routes = {
//     // Get Articles
//     case GET(p"/today/$zone") =>
//       articlesController.getTodayStories(zone)
//     case GET(p"/today/count/$zone") =>
//       articlesController.getNumberOfArticles(zone)
//     case GET(p"/week/$zone") =>
//       articlesController.getThisWeekStories(zone)
//     case GET(p"/lastweek/$zone") =>
//       articlesController.getLastWeekStories(zone)
//     case GET(p"/month/$zone") =>
//       articlesController.getMonthlyStories(zone)
//     //  Report Abuse
//     case POST(p"/abuse") =>
//       articlesController.reportAbuse
