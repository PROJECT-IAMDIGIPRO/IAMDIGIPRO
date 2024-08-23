import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrls: ['./consult-us.component.css']
})
export class ConsultUsComponent implements AfterViewInit, OnInit {

  // Define the form model
  contactForm = {
    username: '',
    phonenumber: '',
    email: '',
    description: '',
    interested: ''
  };

  // API endpoint
  private apiUrl = 'http://3.208.6.7/contact/contactus';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Any initialization logic can be placed here
    console.log('ConsultUsComponent initialized');
  }

  // Handle form submission
  onSubmit() {
    this.http.post<any>(this.apiUrl, this.contactForm).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          alert('Thank you for your inquiry!');
          this.router.navigate(['/thank-you']);
        } else {
          alert('Submission failed: ' + response.message);
        }
      },
      error: (error) => {
        console.error('Error during form submission:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  }

  // Update selected services
  onServiceChange(event: any) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      this.contactForm.interested += (this.contactForm.interested ? ', ' : '') + value;
    } else {
      this.contactForm.interested = this.contactForm.interested
        .split(', ')
        .filter((service: string) => service !== value)
        .join(', ');
    }
  }

  ngAfterViewInit() {
    this.addHorizontalScrollListener();
  }

  addHorizontalScrollListener() {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', (event: WheelEvent) => {
        event.preventDefault();
        
        const scrollAmount = event.deltaY > 0 ? 200 : -100;
        
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    }
  }
}