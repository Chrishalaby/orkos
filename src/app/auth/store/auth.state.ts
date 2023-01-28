import { Profile } from "src/app/shared/models/profile.model";

export interface AuthState {
  pending: boolean;
  user: Profile | null;
}
