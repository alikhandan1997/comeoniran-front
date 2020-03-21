import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsDetailComponent } from './hotels-detail.component';

describe('HotelsDetailComponent', () => {
  let component: HotelsDetailComponent;
  let fixture: ComponentFixture<HotelsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
