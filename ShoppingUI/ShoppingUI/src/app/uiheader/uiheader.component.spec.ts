import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIHeaderComponent } from './uiheader.component';

describe('UIHeaderComponent', () => {
  let component: UIHeaderComponent;
  let fixture: ComponentFixture<UIHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
