import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { Profile } from 'src/app/shared/models/profile.model';
import { AuthState } from './auth.state';

export const selectAuthFeature: MemoizedSelector<object, AuthState, DefaultProjectorFn<AuthState>> = createFeatureSelector<AuthState>('auth');

export const selectAuthPending: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>> = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.pending,
);

export const selectAuthUser: MemoizedSelector<object, Profile | null, DefaultProjectorFn<Profile | null>> = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.user,
);