import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {WebsiteState, WebsiteStore} from '../store/website-store';
import {Website} from '../models/website.model';
import {WebsiteService} from '../services/website-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebsiteQueries extends QueryEntity<WebsiteState, Website> {
  constructor(
    protected store: WebsiteStore,
    private service: WebsiteService
  ) {
    super(store);
  }

  public getWebsite(zone: string, siteCode: string): Observable<Website> {
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
