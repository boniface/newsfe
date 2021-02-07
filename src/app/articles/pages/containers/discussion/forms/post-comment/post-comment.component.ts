import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@ngneat/reactive-forms';
import {Validators} from '@angular/forms';
import {LocalStorageService} from '../../../../../../shared/storage/localstorage.service';
import {CommentUser} from '../../../../../../users/state/models/comment-user.model';
import {Util} from '../../../../../../shared/util/Utils';
import {Comment} from '../../../../../state/models/discussion/comment.model';


@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  @Input() articleId: string;
  @Input() siteId: string;
  commentForm: FormGroup;
  loggedInUser: boolean;
  maxLength = 800;
  theLength = 0;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService) {
  }


  ngOnInit(): void {
    interface CommentEntity {
      screenName: string;
      email: string;
      comment: string;
    }

    this.commentForm = this.formBuilder.group({
      screenName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(this.maxLength)]]
    });
    this.loggedInUser = this.localStorageService.userHasProfile();

    this.commentForm.getControl('comment').valueChanges.subscribe(value => {
      // do something with value here
      this.theLength = value.length;
    });

    this.commentForm.getControl('email');
    this.loggedInUser = false;
    this.commentForm.patchValue({screenName: 'Netanel'});
  }

  onSubmit(): void {
    const author: CommentUser = {
      email: this.commentForm.value.email,
      screenName: this.commentForm.value.screenName,
    };

    const comment: Comment = {
      siteId: this.siteId,
      topicId: this.articleId,
      emailId: author.email,
      commentId: Util.getId(),
      comment: this.commentForm.value.comment,
      date: Util.getDate(),
    };
    this.commentForm.reset();

    console.log(' The Input is ', comment);


  }

  get formFields(): any {
    return this.commentForm.controls;
  }

}
