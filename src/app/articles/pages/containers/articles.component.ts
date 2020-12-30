import {Component, OnInit} from '@angular/core';
import {AppDates} from '../../../shared/util/AppDates';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  testdate;

  constructor() {
  }

  ngOnInit(): void {
    this.testdate = AppDates.lastWeek();
  }

}
