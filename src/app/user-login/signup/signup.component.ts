import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/store/auth.facade';
import { FieldNames } from 'src/app/shared/enums/fields.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signUpFormGroup!: FormGroup;
  public pending$: Observable<boolean> = this.authFacade.selectAuthPending$;

  public readonly fieldNames: typeof FieldNames = FieldNames;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly authFacade: AuthFacade,
  ) {
  }

  ngOnInit(): void {
    this.signUpFormGroup = this.initializeFormGroup();
  }

  submitForm(): void {
    this.authFacade.signUp(this.signUpFormGroup.value);
  }

  initializeFormGroup(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.FirstName]: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      [FieldNames.LastName]: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      [FieldNames.Username]: ['', [Validators.required]],
      [FieldNames.Email]: ['', [Validators.required, Validators.email]],
      [FieldNames.Password]: ['', [Validators.required]],
    });
  }
}
