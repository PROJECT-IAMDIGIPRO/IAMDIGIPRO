import { Component } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent {
  // showModal: boolean = false;
  showModal1: boolean = false;

  // openModal() {
  //   this.showModal = true; // Open the modal when the button is clicked
  //   document.body.classList.add('modal-open');
  // }

  // closeModal() {
  //   this.showModal = false; // Close the modal when the event is triggered
  //   document.body.classList.remove('modal-open'); 
  // }
  openModal1() {
    this.showModal1 = true; // Open the modal when the button is clicked
    document.body.classList.add('modal-open');
  }

  closeModal1() {
    this.showModal1 = false; // Close the modal when the event is triggered
    document.body.classList.remove('modal-open'); 
  }
}