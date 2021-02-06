import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgFormsManager} from '@ngneat/forms-manager';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  //    siteId: string;
  //    topicId: string;
  //    emailId: string;
  //    commentId: string;
  //    comment: string;
  //    date: Date;

  @Input() articleId: string;

  @Input() siteId: string;


  commentForm: FormGroup;

  constructor(private formsManager: NgFormsManager,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
