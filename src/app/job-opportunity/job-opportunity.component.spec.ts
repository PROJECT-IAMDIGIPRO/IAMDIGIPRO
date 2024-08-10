import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpportunityComponent } from './job-opportunity.component';

describe('JobOpportunityComponent', () => {
  let component: JobOpportunityComponent;
  let fixture: ComponentFixture<JobOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
