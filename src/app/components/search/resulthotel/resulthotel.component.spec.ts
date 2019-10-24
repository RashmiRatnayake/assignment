import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulthotelComponent } from './resulthotel.component';

describe('ResulthotelComponent', () => {
  let component: ResulthotelComponent;
  let fixture: ComponentFixture<ResulthotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulthotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulthotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
