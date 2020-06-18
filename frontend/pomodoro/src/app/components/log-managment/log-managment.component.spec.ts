import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogManagmentComponent } from './log-managment.component';

describe('LogManagmentComponent', () => {
  let component: LogManagmentComponent;
  let fixture: ComponentFixture<LogManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
