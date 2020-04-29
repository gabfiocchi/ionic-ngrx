import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/counter/counter.actions';
import { AppState } from '../state/state';
import { Post, PostsFacade } from '../state/posts';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  count$: Observable<number>;
  message$: Observable<string>
  post$: Observable<Post>
  text: string; /// form input val

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private postService: PostsFacade
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.count$ = this.store.pipe(select('count'));
    this.message$ = this.store.pipe(select('message'));
    this.post$ = this.store.select('post');
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' })
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  editText() {
    this.postService.editText(this.text);
  }

  resetPost() {
    this.postService.resetPost()
  }

  upvote() {
    this.postService.upvote();
  }

  downvote() {
    this.postService.downvote();
  }
}
