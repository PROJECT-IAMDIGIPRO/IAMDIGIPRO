import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-slot-popup',
  templateUrl: './book-slot-popup.component.html',
  styleUrls: ['./book-slot-popup.component.css']
})
export class BookSlotPopupComponent {  
    @Output() close = new EventEmitter<void>();
    contactForm: any = {
      username: '',
      phonenumber: '',
      email: '',
      course: '',
      mode: '',
      batch: '',
      interested: ''
    };
    private apiUrl = 'http://3.208.6.7/contact/contactus';
  
    constructor(private http: HttpClient, private router: Router) {}
  
    onSubmit() {
      if (!this.contactForm.username || !this.contactForm.phonenumber || !this.contactForm.email || !this.contactForm.course || !this.contactForm.mode || !this.contactForm.batch) {
        alert('Please fill in all required details.');
        return; 
      }
      this.http.post<{ status: string }>(this.apiUrl, this.contactForm).subscribe(
        response => {
          if (response.status === 'Thank you for your inquiry!') {
            alert('Thank you for your inquiry');
            this.closeModal(); 
          } else {
            alert(response.status || 'Submission failed');
          }
        },
        error => {
          console.error('Error during form submission:', error);
          alert('An error occurred. Please try again later.');
        }
      );
    }
    
    onCourseChange(event: any) {
      this.contactForm.course = event.target.value;
      this.contactForm.mode = ''; // Reset mode and batch when course changes
      this.contactForm.batch = '';
    }
    
    onModeChange(event: any) {
      this.contactForm.mode = event.target.value;
      this.contactForm.batch = ''; // Reset batch when mode changes
    }
    
    closeModal() {
      this.close.emit(); // Emit an event to the parent to close the modal
    }
}
