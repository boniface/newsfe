import { Component, OnInit } from '@angular/core';
import {Article} from '../../../state/models/articles/article.model';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  article: Article
  constructor() { }

  ngOnInit(): void {
  }

}
