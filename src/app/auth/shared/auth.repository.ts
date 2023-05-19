import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInDetails, SignUpDetails } from './models/auth-details.model';
import { AuthResponse } from './models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  personMail: string = '';

  signIn(signInDetails: SignInDetails): Observable<AuthResponse> {
    this.personMail = signInDetails.email;
    return this.httpClient.post<AuthResponse>(
      `${environment.apiUrl}/auth/sign-in`,
      {
        ...signInDetails,
      }
    );
  }

  signUp(signUpDetails: SignUpDetails): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      `${environment.apiUrl}/auth/sign-up`,
      {
        ...signUpDetails,
      }
    );
  }
}
