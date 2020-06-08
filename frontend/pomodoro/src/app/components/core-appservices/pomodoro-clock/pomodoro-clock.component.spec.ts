import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroClockComponent } from './pomodoro-clock.component';

describe('PomodoroClockComponent', () => {
  let component: PomodoroClockComponent;
  let fixture: ComponentFixture<PomodoroClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
