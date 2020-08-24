import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertiCardComponent } from './certi-card.component';

describe('CertiCardComponent', () => {
  let component: CertiCardComponent;
  let fixture: ComponentFixture<CertiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
