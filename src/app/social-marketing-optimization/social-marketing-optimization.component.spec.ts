import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMarketingOptimizationComponent } from './social-marketing-optimization.component';

describe('SocialMarketingOptimizationComponent', () => {
  let component: SocialMarketingOptimizationComponent;
  let fixture: ComponentFixture<SocialMarketingOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialMarketingOptimizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMarketingOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
