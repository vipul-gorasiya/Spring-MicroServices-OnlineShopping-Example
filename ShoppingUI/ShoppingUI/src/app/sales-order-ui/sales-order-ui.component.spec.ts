import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderUIComponent } from './sales-order-ui.component';

describe('SalesOrderUIComponent', () => {
  let component: SalesOrderUIComponent;
  let fixture: ComponentFixture<SalesOrderUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
