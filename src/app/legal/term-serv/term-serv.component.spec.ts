import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermServComponent } from './term-serv.component';

describe('TermServComponent', () => {
  let component: TermServComponent;
  let fixture: ComponentFixture<TermServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermServComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
