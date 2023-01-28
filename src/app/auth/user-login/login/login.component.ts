import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/store/auth.facade';
import { FieldNames } from 'src/app/shared/enums/fields.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInFormGroup!: FormGroup;
  public pending$: Observable<boolean> = this.authFacade.selectAuthPending$;

  public readonly fieldNames: typeof FieldNames = FieldNames;
  isPending: boolean | undefined;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade,

  ) {
  }

  ngOnInit(): void {
    this.signInFormGroup = this.initializeFormGroup();
  }

  submitForm(): void {
    this.authFacade.signIn(this.signInFormGroup.value);
  }

  initializeFormGroup(): FormGroup {
    return this.formBuilder.group({
      [FieldNames.Email]: ['', [Validators.required]],
      [FieldNames.Password]: ['', [Validators.required]],
    });
  }

}
