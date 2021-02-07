import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@ngneat/reactive-forms';
import {LocalStorageService} from '../../../../../../shared/storage/localstorage.service';
import {Validators} from '@angular/forms';
import {CommentUser} from '../../../../../../users/state/models/comment-user.model';
import {Util} from '../../../../../../shared/util/Utils';
import {Response} from '../../../../../state/models/discussion/response.model';

@Component({
  selector: 'app-post-response',
  templateUrl: './post-response.component.html',
  styleUrls: ['./post-response.component.css']
})
export class PostResponseComponent implements OnInit {
  @Input() commentId: string;
  responseForm: FormGroup;
  loggedInUser: boolean;
  maxLength = 800;
  theLength = 0;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    interface ResponseEntity {
      screenName: string;
      email: string;
      response: string;
    }

    this.responseForm = this.formBuilder.group({
      screenName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      response: ['', [Validators.required, Validators.maxLength(this.maxLength)]]
    });
    this.loggedInUser = this.localStorageService.userHasProfile();

    this.responseForm.getControl('response').valueChanges.subscribe(value => {
      // do something with value here
      this.theLength = value.length;
    });

    this.responseForm.getControl('email');
    this.loggedInUser = false;
    // this.responseForm.patchValue({screenName: 'Netanel'});
  }

  onSubmit(): void {
    const author: CommentUser = {
      email: this.responseForm.value.email,
      screenName: this.responseForm.value.screenName,
    };

    const response: Response = {
      commentId: this.commentId,
      emailId: author.email,
      responseId: Util.getId(),
      response: this.responseForm.value.response,
      date: Util.getDate(),
    };
    this.responseForm.reset();

    console.log(' The Input is ', response);

  }

  get formFields(): any {
    return this.responseForm.controls;
  }

}
