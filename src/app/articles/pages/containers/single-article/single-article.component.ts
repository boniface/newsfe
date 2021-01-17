import {Component, OnInit} from '@angular/core';
import {Article} from '../../../state/models/articles/article.model';
import {BaseComponent} from '../../../../shared/BaseComponent';
import {CanonicalService} from '../../../../shared/util/canonical.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticlesTodayQueries} from '../../../state/queries/articles/articles-today-queries';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent extends BaseComponent implements OnInit {
  article: Article;
  linkhash: string;
  constructor(
    private canonicalService: CanonicalService,
    private titleService: Title,
    private metaTagService: Meta,
    private activeRoute: ActivatedRoute,
    private articlesTodayQueries: ArticlesTodayQueries,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.activeRoute.params
      .subscribe(params => {
        this.linkhash = params.id;
      });
    this.articlesTodayQueries
      .getArticle(this.linkhash)
      .pipe(takeUntil(this.destroyed))
      .subscribe( result => this.article = result);
  }

}
