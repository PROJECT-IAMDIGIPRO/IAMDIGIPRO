import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrl: './consult-us.component.css'
})
export class ConsultUsComponent {
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
