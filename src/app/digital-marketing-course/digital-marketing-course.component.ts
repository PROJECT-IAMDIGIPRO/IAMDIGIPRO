import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-marketing-course',
  templateUrl: './digital-marketing-course.component.html',
  styleUrl: './digital-marketing-course.component.css'
})
export class DigitalMarketingCourseComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true; // Open the modal when the button is clicked
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.showModal = false; // Close the modal when the event is triggered
    document.body.classList.remove('modal-open'); 
  }
}
