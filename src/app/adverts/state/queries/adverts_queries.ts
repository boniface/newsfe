import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {WebsiteState, WebsiteStore} from '../../../websites/state/store/website-store';
import {Website} from '../../../websites/state/models/website.model';
import {WebsiteService} from '../../../websites/state/services/website-service';
import {Observable} from 'rxjs';
import { Adverts } from '../models/adverts';
import { AdvertsService } from '../services/adverts.service';
import {AdvertsState, AdvertsStore} from '../store/adverts_Store';


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
}
