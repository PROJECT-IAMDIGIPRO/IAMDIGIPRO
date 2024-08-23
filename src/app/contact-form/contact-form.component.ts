import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  showModal: boolean = false;
  formData = {
    name: '',
    phone: '',
    email: ''
  };

 
  openForm(): void {
    this.showModal = true;
  }

  closeForm(): void {
    this.showModal = false;
  }

  onSubmit(form: any): void {
    console.log('Form submitted:', form);
    this.closeForm();
  }
}
