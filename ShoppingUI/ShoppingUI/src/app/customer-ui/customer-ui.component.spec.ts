import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUIComponent } from './customer-ui.component';

describe('CustomerUIComponent', () => {
  let component: CustomerUIComponent;
  let fixture: ComponentFixture<CustomerUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
