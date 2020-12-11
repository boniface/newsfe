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
    return this.selectEntity(id);
  }

  public getWebsites(): Observable<Website[]> {
    return this.selectAll();
  }

  public getZoneSites(zone: string): Observable<Website[]> {
    return this.selectAll({
      filterBy: entity => entity.zone === zone
    });
  }


}
