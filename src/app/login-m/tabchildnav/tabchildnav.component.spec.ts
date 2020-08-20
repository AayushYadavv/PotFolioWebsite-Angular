import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabchildnavComponent } from './tabchildnav.component';

describe('TabchildnavComponent', () => {
  let component: TabchildnavComponent;
  let fixture: ComponentFixture<TabchildnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabchildnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabchildnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
