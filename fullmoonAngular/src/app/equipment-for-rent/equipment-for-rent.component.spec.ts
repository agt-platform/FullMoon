import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentForRentComponent } from './equipment-for-rent.component';

describe('EquipmentForRentComponent', () => {
  let component: EquipmentForRentComponent;
  let fixture: ComponentFixture<EquipmentForRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentForRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
