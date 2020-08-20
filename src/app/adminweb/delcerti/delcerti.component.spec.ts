import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelcertiComponent } from './delcerti.component';

describe('DelcertiComponent', () => {
  let component: DelcertiComponent;
  let fixture: ComponentFixture<DelcertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelcertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelcertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
