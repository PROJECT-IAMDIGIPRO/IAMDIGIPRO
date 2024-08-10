import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicUIDesignComponent } from './graphic-uidesign.component';

describe('GraphicUIDesignComponent', () => {
  let component: GraphicUIDesignComponent;
  let fixture: ComponentFixture<GraphicUIDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicUIDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicUIDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
