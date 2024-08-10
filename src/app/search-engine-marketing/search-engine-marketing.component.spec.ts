import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineMarketingComponent } from './search-engine-marketing.component';

describe('SearchEngineMarketingComponent', () => {
  let component: SearchEngineMarketingComponent;
  let fixture: ComponentFixture<SearchEngineMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchEngineMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEngineMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
