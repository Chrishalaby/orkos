import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivPolicyComponent } from './priv-policy.component';

describe('PrivPolicyComponent', () => {
  let component: PrivPolicyComponent;
  let fixture: ComponentFixture<PrivPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
