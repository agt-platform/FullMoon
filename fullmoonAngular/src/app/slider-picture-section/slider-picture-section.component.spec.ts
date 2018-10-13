import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPictureSectionComponent } from './slider-picture-section.component';

describe('SliderPictureSectionComponent', () => {
  let component: SliderPictureSectionComponent;
  let fixture: ComponentFixture<SliderPictureSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPictureSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPictureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
