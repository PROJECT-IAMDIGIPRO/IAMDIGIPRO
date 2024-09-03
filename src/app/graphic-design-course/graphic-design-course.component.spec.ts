import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignCourseComponent } from './graphic-design-course.component';

describe('GraphicDesignCourseComponent', () => {
  let component: GraphicDesignCourseComponent;
  let fixture: ComponentFixture<GraphicDesignCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicDesignCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicDesignCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
