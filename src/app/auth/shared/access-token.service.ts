import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { ModuleRoutes, AuthRoutes } from 'src/app/shared/enums/routes.enum';
import { TokenKeys } from 'src/app/shared/enums/tokens.enum';
import { JwtData } from './models/jwt-data.model';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  public accessTokenData: JwtData | undefined = undefined;

  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router,
  ) {
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public decodeAccessToken(accessToken: string): void {
    const decodedAccessToken: JwtData = jwtDecode(accessToken);

    this.accessTokenData = {
      profile: decodedAccessToken.profile,
      expiryDate: moment.unix(<number>decodedAccessToken.exp).toDate(),
    };
  }

  public setAccessToken(accessToken: string): void {
    this.cookieService.set(TokenKeys.JwtCookie, accessToken, this.accessTokenData?.expiryDate, '/');
  }

  public deleteAccessToken(): void {
    this.cookieService.delete(TokenKeys.JwtCookie);

    this.router.navigate([ModuleRoutes.Auth, AuthRoutes.SignIn]);
  }

  public getAccessToken(): string {
    return this.cookieService.get(TokenKeys.JwtCookie);
  }
}
