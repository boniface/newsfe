import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {AbuseState, AbuseStore} from '../store/abuse-store';
import {AbuseService} from '../services/abuse.service';
import {Abuse} from '../models/abuse.model';
import {CommentState, CommentStore} from '../store/comment-store';
import {CommentService} from '../services/comment.service';
import {CommentsState, CommentsStore} from '../store/comments-store';
import {Comments} from '../models/comments.model';
import {CommentsService} from '../services/comments.service';
import {Votes} from '../models/votes.model';
import {VotesState, VotesStore} from '../store/votes';
import {VotesService} from '../services/votes.service';
import {ResponseState, ResponseStore} from '../store/response';
import {ResponseService} from '../services/response.service';
import {Responses} from '../models/responses.model';
import {ResponsesState, ResponsesStore} from '../store/responses';
import {ResponsesService} from '../services/responses.service';

@Injectable({
  providedIn: 'root'
})

export class AbuseQueries extends QueryEntity<AbuseState, Abuse> {
  constructor(
    protected store: AbuseStore,
    private service: AbuseService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}

@Injectable({
  providedIn: 'root'
})

export class ResponseQueries extends QueryEntity<ResponseState, Response> {
  constructor(
    protected store: ResponseStore,
    private service: ResponseService
  ) {
    super(store);
  }
}

@Injectable({
  providedIn: 'root'
})

export class ResponsesQueries extends QueryEntity<ResponsesState, Responses> {
  constructor(
    protected store: ResponsesStore,
    private service: ResponsesService
  ) {
    super(store);
  }
}

@Injectable({
  providedIn: 'root'
})

export class VotesQueries extends QueryEntity<VotesState, Votes> {
  constructor(
    protected store: VotesStore,
    private service: VotesService
  ) {
    super(store);
  }

  /**
   *  More Queries Follow Below
   */
}

@Injectable({
  providedIn: 'root'
})

export class CommentQueries extends QueryEntity<CommentState, Comment> {
  constructor(
    protected store: CommentStore,
    private service: CommentService
  ) {
    super(store);
  }
}

@Injectable({
  providedIn: 'root'
})

export class CommentsQueries extends QueryEntity<CommentsState, Comments> {
  constructor(
    protected store: CommentsStore,
    private service: CommentsService
  ) {
    super(store);
  }
}
