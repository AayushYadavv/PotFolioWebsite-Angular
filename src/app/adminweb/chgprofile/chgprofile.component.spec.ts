import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChgprofileComponent } from './chgprofile.component';

describe('ChgprofileComponent', () => {
  let component: ChgprofileComponent;
  let fixture: ComponentFixture<ChgprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChgprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChgprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
