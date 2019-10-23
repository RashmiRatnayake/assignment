import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcontractComponent } from './searchcontract.component';

describe('SearchcontractComponent', () => {
  let component: SearchcontractComponent;
  let fixture: ComponentFixture<SearchcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
