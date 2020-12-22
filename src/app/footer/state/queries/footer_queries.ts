import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {FooterService} from '../services/footer.service';
import {Footer} from '../models/footer';
import {FooterState, FooterStore} from '../store/footer_sore';

@Injectable({
  providedIn: 'root'
})

export class FooterQueries extends QueryEntity<FooterState, Footer> {
  constructor(
    protected store: FooterStore,
    private service: FooterService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}
