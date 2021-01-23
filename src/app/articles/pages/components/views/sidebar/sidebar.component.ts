import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../state/models/articles/article.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }

  ngOnInit(): void {
  }

}
