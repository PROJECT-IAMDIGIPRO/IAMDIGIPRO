import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSlotPopupComponent } from './book-slot-popup.component';

describe('BookSlotPopupComponent', () => {
  let component: BookSlotPopupComponent;
  let fixture: ComponentFixture<BookSlotPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSlotPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSlotPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
