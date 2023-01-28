import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/shared/models/profile.model';
import { State } from 'src/app/shared/models/store.model';
import { SignInDetails, SignUpDetails } from '../shared/models/auth-details.model';
import { signIn, signUp } from './auth.actions';
import { selectAuthPending, selectAuthUser } from './auth.selectors';

@Injectable({providedIn: 'root'})
export class AuthFacade {
  public selectAuthPending$: Observable<boolean> = this.store.pipe(select(selectAuthPending));
  public selectAuthUser$: Observable<Profile | null> = this.store.pipe(select(selectAuthUser));

  constructor(
    private readonly store: Store<State>,
  ) {
  }

  public signIn(signInDetails: SignInDetails): void {
    this.store.dispatch(signIn({signInDetails}));
  }

  public signUp(signUpDetails: SignUpDetails): void {
    this.store.dispatch(signUp({signUpDetails}));
  }


}
