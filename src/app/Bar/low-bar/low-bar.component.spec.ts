import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowBarComponent } from './low-bar.component';

describe('LowBarComponent', () => {
  let component: LowBarComponent;
  let fixture: ComponentFixture<LowBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
