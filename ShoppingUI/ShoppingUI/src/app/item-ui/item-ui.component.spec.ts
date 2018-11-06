import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUIComponent } from './item-ui.component';

describe('ItemUIComponent', () => {
  let component: ItemUIComponent;
  let fixture: ComponentFixture<ItemUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
