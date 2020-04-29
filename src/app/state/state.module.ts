import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from "./counter/counter.reducer";
import { simpleReducer } from './simple/simple.reducer';

// import { UserFacade, userReducer } from './users';
import { postReducer, PostsFacade } from './posts';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebase;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([
      // UserFacade,
      PostsFacade
    ]),
    // Signature matches AppState interface
    StoreModule.forRoot({
      post: postReducer,
      // user: userReducer,
      count: counterReducer,
      message: simpleReducer
    }),
    // Redux plugin
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    // UserFacade,
    PostsFacade
  ],
})
export class StateModule { }
