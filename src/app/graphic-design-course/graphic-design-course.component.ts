import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-design-course',
  templateUrl: './graphic-design-course.component.html',
  styleUrl: './graphic-design-course.component.css'
})
export class GraphicDesignCourseComponent {
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
