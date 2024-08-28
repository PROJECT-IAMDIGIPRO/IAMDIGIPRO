import { Component } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent {
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