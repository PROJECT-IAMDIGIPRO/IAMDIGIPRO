import { Component } from '@angular/core';

@Component({
  selector: 'app-job-opportunity',
  templateUrl: './job-opportunity.component.html',
  styleUrl: './job-opportunity.component.css'
})
export class JobOpportunityComponent {
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