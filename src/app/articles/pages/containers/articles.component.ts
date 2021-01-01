import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../shared/BaseComponent';
import {Article} from '../../state/models/article.model';
import {CanonicalService} from '../../../shared/util/canonical.service';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ArticlesQueries} from '../../state/queries/articles-queries';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent extends BaseComponent implements OnInit {
  data: Date = new Date();
  title = 'Zambia Hash: The Single Source of All the News Headlines in Zambia';
  todayArticles: Article[];
  yesterdayArticles: Article[];
  thisWeekArticles: Article[];
  lastWeekArticles: Article[];
  thisMonthArticles: Article[];
  lastMonthArticles: Article[];

  constructor(
    private canonicalService: CanonicalService,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private articleQueries: ArticlesQueries,
  ) {
    super();
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      {name: 'description', content: 'The Single Source of all online news Headlines from Zambia'}
    );
    this.articleQueries.getArticles()
      .pipe(takeUntil(this.destroyed))
      .subscribe(aricles => {
        this.todayArticles = aricles;
      });

  }

}
