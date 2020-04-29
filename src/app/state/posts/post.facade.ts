import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Effect, ofType, Actions, createEffect } from '@ngrx/effects';

// import { AngularFirestore } from '@angular/fire/firestore';

// import { Observable, of } from 'rxjs';
// import { ofType, exhaustMap } from 'rxjs/operators';
// import '../rxjs.operators';

import { AppState } from '../state';
// import { Post } from './post.model';
// import { PostsQuery } from './post.reducer';

// import { AUTHENTICATED } from '../users/user.actions';
import * as postActions from './post.actions';
// type Action = postActions.All;


@Injectable()
export class PostsFacade {

  //   // ************************************************
  //   // Observable Queries available for consumption by views
  //   // ************************************************

  //   post$ = this.store.select(PostsQuery.getPost);

  //   // ************************************************
  //   // Effects to be registered at the Module level
  //   // ************************************************
  //   // @Effect()
  //   // init$ = this.actions$.ofType(AUTHENTICATED)
  //   //   .map(_ => new postActions.GetPost('/posts/testPost'));

  //   // @Effect()
  //   // getPost$: Observable<Action> = this.actions$.ofType(postActions.GET_POST)
  //   //   .map((action: postActions.GetPost) => action.payload)
  //   //   .delay(2000) // delay to show spinner
  //   //   .mergeMap(payload => this.db.object(payload))
  //   //   .map(post => {
  //   //     post.pushKey = post.$key;
  //   //     return new postActions.GetPostSuccess(post);
  //   //   });


  //   // @Effect()
  //   // voteUpdate: Observable<Action> = this.actions$.ofType(postActions.VOTE_UPDATE)
  //   //   .map((action: postActions.VoteUpdate) => action.payload)
  //   //   .mergeMap(payload => of(this.db.object('posts/' + payload.post.pushKey)
  //   //     .update({
  //   //       votes: payload.post.votes + payload.val
  //   //     })))

  //   //   .map(() => new postActions.VoteSuccess())
  //   //   .catch(err => of(new postActions.VoteFail({ error: err.message })));

  //   // ************************************************
  //   // Internal Code
  //   // ************************************************

  constructor(
    // private actions$: Actions,
    private store: Store<AppState>,
    // private db: AngularFirestore
  ) { }


  //   loadPost(name = 'testPost'): Observable<Post> {
  //     this.store.dispatch(new postActions.GetPost(`/posts/${name}`));
  //     return this.post$;
  //   }

  //   vote(post: Post, val: number): void {
  //     this.store.dispatch(new postActions.VoteUpdate({ post, val }));
  //   }
  editText(text) {
    this.store.dispatch(new postActions.EditText(text))
  }

  resetPost() {
    this.store.dispatch(new postActions.Reset())
  }

  upvote() {
    this.store.dispatch(new postActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new postActions.Downvote())
  }
}
