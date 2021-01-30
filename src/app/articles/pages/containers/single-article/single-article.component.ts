import {Component, OnInit} from '@angular/core';
import {Article} from '../../../state/models/articles/article.model';
import {BaseComponent} from '../../../../shared/BaseComponent';
import {CanonicalService} from '../../../../shared/util/canonical.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {SingleArticleQuery} from '../../../state/queries/discussion/single-article-query';
import {ArticlesQueries} from '../../../state/queries/articles/articles-queries';
import {ZONE} from '../../../../shared/util/Utils';
import {ArticleCommentQuery} from '../../../state/queries/discussion/article-comment-query';
import {ArticleComment} from '../../../state/models/discussion/article-comment.model';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent extends BaseComponent implements OnInit {
  article: Article;
  linkhash: string;
  latestArticles: Article[];
  comments: ArticleComment [];

  constructor(
    private canonicalService: CanonicalService,
    private titleService: Title,
    private metaTagService: Meta,
    private activeRoute: ActivatedRoute,
    private articleQuery: SingleArticleQuery,
    private articleQueries: ArticlesQueries,
    private articleCommentQuery: ArticleCommentQuery,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.activeRoute.params
      .subscribe(params => {
        this.linkhash = params.id;
      });
    this.articleQuery
      .getArticle(this.linkhash)
      .pipe(takeUntil(this.destroyed))
      .subscribe(story => {
          this.article = story;
          this.canonicalService.setCanonicalURL();
          this.titleService.setTitle(story?.title);
          this.metaTagService.updateTag(
            {name: 'Description', content: story?.metaDescription}
          );
        }
      );
    this.articleQueries
      .getTheLatest(ZONE)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.latestArticles = articles;
      });
    this.articleCommentQuery
      .getComments(this.linkhash)
      .pipe(takeUntil(this.destroyed))
      .subscribe(articles => {
        this.comments = articles;
      });
  }

}
