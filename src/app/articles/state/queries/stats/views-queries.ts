import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ViewsState, ViewsStore} from '../../store/stats/views-store';
import {ViewsService} from '../../services/stats/views.service';
import {Observable} from 'rxjs';
import {Views} from '../../models/stats/views.model';

@Injectable({
  providedIn: 'root'
})

export class ViewsQueries extends QueryEntity<ViewsState, Views> {
  constructor(
    protected store: ViewsStore,
    private service: ViewsService
  ) {
    super(store);
  }

  getViews(id: string): Observable<Views> {
    if (this.hasEntity(id) === false) {
      return this.service.getViews(id);
    }
    return this.selectEntity(id);
  }
}
