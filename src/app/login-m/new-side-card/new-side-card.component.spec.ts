import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSideCardComponent } from './new-side-card.component';

describe('NewSideCardComponent', () => {
  let component: NewSideCardComponent;
  let fixture: ComponentFixture<NewSideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
