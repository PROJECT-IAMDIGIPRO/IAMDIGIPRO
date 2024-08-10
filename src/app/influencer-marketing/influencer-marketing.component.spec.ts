import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerMarketingComponent } from './influencer-marketing.component';

describe('InfluencerMarketingComponent', () => {
  let component: InfluencerMarketingComponent;
  let fixture: ComponentFixture<InfluencerMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluencerMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
