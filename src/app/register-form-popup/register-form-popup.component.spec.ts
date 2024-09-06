import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormPopupComponent } from './register-form-popup.component';

describe('RegisterFormPopupComponent', () => {
  let component: RegisterFormPopupComponent;
  let fixture: ComponentFixture<RegisterFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
