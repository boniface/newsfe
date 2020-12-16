import {Component, OnInit} from '@angular/core';
import {WebsiteQueries} from '../../state/queries/website-queries';
import {BaseComponent} from '../../../shared/BaseComponent';
import {Website} from '../../state/models/website.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent extends BaseComponent implements OnInit {
  websites: Website[];
  zoneSites: Website[];
  website: Website;

  constructor(
    private websiteQueries: WebsiteQueries
  ) {
    super();
  }

  ngOnInit(): void {
    this.websiteQueries.getWebsites()
      .pipe(takeUntil(this.destroyed))
      .subscribe(results => {
        this.websites = results;
      });
    this.getSite('ZM', 'LT');
  }

  getZoneSites(zone: string): void {
    this.websiteQueries.getZoneSites(zone)
      .pipe(takeUntil(this.destroyed))
      .subscribe(results => {
        this.zoneSites = results;
      });
  }

  getSite(zone: string, siteCode: string): void {
    this.websiteQueries.getWebsite(zone, siteCode)
      .pipe(takeUntil(this.destroyed))
      .subscribe(results => {
        this.website = results;
      });
  }

}
