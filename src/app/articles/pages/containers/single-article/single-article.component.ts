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
import {SingleArticleService} from '../../../state/services/discussion/single-article-service';

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
    private service: SingleArticleService,

    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.activeRoute.params
      .subscribe(params => {
        this.linkhash = params.id;
      });
    this.service
      .getArticle(this.linkhash)
      .pipe(takeUntil(this.destroyed))
      .subscribe(singleArticle => {
          this.article = singleArticle.article;
          this.canonicalService.setCanonicalURL();
          this.titleService.setTitle(singleArticle.article?.title);
          this.metaTagService.updateTag(
            {name: 'Description', content: singleArticle.article?.metaDescription}
          );
          this.comments = singleArticle.articleComments;
        }
      );

    console.log(" Results ", this.comments);
  }

}
