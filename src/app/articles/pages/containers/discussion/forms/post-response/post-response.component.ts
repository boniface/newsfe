import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgFormsManager} from '@ngneat/forms-manager';

@Component({
  selector: 'app-post-response',
  templateUrl: './post-response.component.html',
  styleUrls: ['./post-response.component.css']
})
export class PostResponseComponent implements OnInit {
  //     commentId: string;
  //    emailId: string;
  //    responseId: string;
  //    response: string;
  //    date: Date;
  @Input() commentId: string;
  responseForm: FormGroup;

  constructor(private formsManager: NgFormsManager,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
