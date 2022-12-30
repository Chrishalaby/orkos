import { ActionReducer } from '@ngrx/store';
import { AuthState } from 'src/app/auth/store/auth.state';


export interface LazyModules {
  auth: AuthState;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Shared {
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
