import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDevelopmentMarketingComponent } from './content-development-marketing.component';

describe('ContentDevelopmentMarketingComponent', () => {
  let component: ContentDevelopmentMarketingComponent;
  let fixture: ComponentFixture<ContentDevelopmentMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentDevelopmentMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDevelopmentMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
