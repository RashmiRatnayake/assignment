import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractoptionsComponent } from './contractoptions.component';

describe('ContractoptionsComponent', () => {
  let component: ContractoptionsComponent;
  let fixture: ComponentFixture<ContractoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
