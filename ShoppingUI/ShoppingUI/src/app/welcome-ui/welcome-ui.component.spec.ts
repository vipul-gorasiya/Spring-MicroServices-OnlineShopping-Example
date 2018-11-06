import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUIComponent } from './welcome-ui.component';

describe('WelcomeUIComponent', () => {
  let component: WelcomeUIComponent;
  let fixture: ComponentFixture<WelcomeUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
