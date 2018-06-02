import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsDetailComponent } from './rests-detail.component';

describe('RestsDetailComponent', () => {
  let component: RestsDetailComponent;
  let fixture: ComponentFixture<RestsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
