import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcertiComponent } from './addcerti.component';

describe('AddcertiComponent', () => {
  let component: AddcertiComponent;
  let fixture: ComponentFixture<AddcertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
