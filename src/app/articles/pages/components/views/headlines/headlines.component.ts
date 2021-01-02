import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../state/models/articles/article.model';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  @Input() articles: Article[];
  views: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
