import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-engine-marketing',
  templateUrl: './search-engine-marketing.component.html',
  styleUrl: './search-engine-marketing.component.css'
})
export class SearchEngineMarketingComponent {
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
