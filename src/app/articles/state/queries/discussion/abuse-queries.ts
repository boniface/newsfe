import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {AbuseState, AbuseStore} from '../../store/discussion/abuse-store';
import {AbuseService} from '../../services/discussion/abuse.service';
import {Abuse} from '../../models/discussion/abuse.model';
import {CommentState, CommentStore} from '../../store/discussion/comment-store';
import {CommentService} from '../../services/discussion/comment.service';
import {CommentsState, CommentsStore} from '../../store/discussion/comments-store';
import {Comments} from '../../models/discussion/comments.model';
import {CommentsService} from '../../services/discussion/comments.service';
import {Votes} from '../../models/discussion/votes.model';
import {VotesState, VotesStore} from '../../store/discussion/votes';
import {VotesService} from '../../services/discussion/votes.service';
import {ResponseState, ResponseStore} from '../../store/discussion/response';
import {ResponseService} from '../../services/discussion/response.service';
import {Responses} from '../../models/discussion/responses.model';
import {ResponsesState, ResponsesStore} from '../../store/discussion/responses';
import {ResponsesService} from '../../services/discussion/responses.service';

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
