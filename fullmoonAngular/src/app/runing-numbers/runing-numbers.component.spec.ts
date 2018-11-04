import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuningNumbersComponent } from './runing-numbers.component';

describe('RuningNumbersComponent', () => {
  let component: RuningNumbersComponent;
  let fixture: ComponentFixture<RuningNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuningNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuningNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
