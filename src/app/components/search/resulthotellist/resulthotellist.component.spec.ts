import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulthotellistComponent } from './resulthotellist.component';

describe('ResulthotellistComponent', () => {
  let component: ResulthotellistComponent;
  let fixture: ComponentFixture<ResulthotellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulthotellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulthotellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
