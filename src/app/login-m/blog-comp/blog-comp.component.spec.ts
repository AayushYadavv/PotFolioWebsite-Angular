import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCompComponent } from './blog-comp.component';

describe('BlogCompComponent', () => {
  let component: BlogCompComponent;
  let fixture: ComponentFixture<BlogCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
