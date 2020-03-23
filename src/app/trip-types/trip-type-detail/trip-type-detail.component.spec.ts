import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTypeDetailComponent } from './trip-type-detail.component';

describe('TripTypeDetailComponent', () => {
  let component: TripTypeDetailComponent;
  let fixture: ComponentFixture<TripTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
