import { Profile } from "src/app/shared/models/profile.model";


export interface JwtData {
  profile: Profile;
  expiryDate: Date;
  exp?: number;
}
