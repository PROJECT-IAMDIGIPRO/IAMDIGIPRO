import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrls: ['./consult-us.component.css']
})
export class ConsultUsComponent implements AfterViewInit, OnInit {

  
  contactForm = {
    username: '',
    phonenumber: '',
    email: '',
    description: '',
    interested: ''
  };

  private apiUrl = 'http://3.208.6.7/contact/contactus';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    console.log('ConsultUsComponent initialized');
  }

  onSubmit() {

    if (!this.contactForm.email || !this.contactForm.phonenumber || !this.contactForm.description || !this.contactForm.interested || !this.contactForm.username) {
      alert('Please fill in all required details.');
      return; 
    }

    this.http.post<{ status: string }>(this.apiUrl, this.contactForm).subscribe(
      response => {
        if (response.status === 'contact saved successfully') {
          alert('Thank you for your inquiry!');
          this.router.navigate(['/thank-you']);
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