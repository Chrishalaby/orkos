import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodialogueComponent } from './infodialogue.component';

describe('InfodialogueComponent', () => {
  let component: InfodialogueComponent;
  let fixture: ComponentFixture<InfodialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfodialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
