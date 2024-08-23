import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-web-app-development',
  templateUrl: './web-app-development.component.html',
  styleUrl: './web-app-development.component.css'
})
export class WebAppDevelopmentComponent {
  faArrowRight = faArrowRight;
  // enquiry form buttons function 
  selectedInterest: string = 'None';
  interests = [
    { value: '5', label: 'Marketing' },
    { value: '4', label: 'Web Development' },
    { value: '3', label: 'Graphic Design' },
    { value: '2', label: 'Consulting' },
    { value: '1', label: 'Influencer Marketing' }
  ];
 
  onInterestSelect(interest: string) {
    this.selectedInterest = interest;
  }
}
