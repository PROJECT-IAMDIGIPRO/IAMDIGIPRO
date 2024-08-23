import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-influencer-marketing',
  templateUrl: './influencer-marketing.component.html',
  styleUrl: './influencer-marketing.component.css'
})
export class InfluencerMarketingComponent {
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
