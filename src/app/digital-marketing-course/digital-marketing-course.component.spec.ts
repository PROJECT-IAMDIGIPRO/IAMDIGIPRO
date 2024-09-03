import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingCourseComponent } from './digital-marketing-course.component';

describe('DigitalMarketingCourseComponent', () => {
  let component: DigitalMarketingCourseComponent;
  let fixture: ComponentFixture<DigitalMarketingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalMarketingCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
