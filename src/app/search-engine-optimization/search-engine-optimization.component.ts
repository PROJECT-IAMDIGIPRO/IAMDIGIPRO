import { Component, AfterViewInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-engine-optimization',
  templateUrl: './search-engine-optimization.component.html',
  styleUrls: ['./search-engine-optimization.component.css']
})
export class SearchEngineOptimizationComponent implements AfterViewInit {
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
  ngAfterViewInit() {
    this.initializeStarRating();
  }

  initializeStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingDisplay = document.querySelector('.rating-display') as HTMLElement;

    stars.forEach(star => {
      star.addEventListener('click', () => {
        // Clear previously selected star styles
        stars.forEach(s => (s as HTMLElement).classList.remove('selected'));

        // Mark the clicked star as selected
        (star as HTMLElement).classList.add('selected');

        // Update the rating display with the tooltip content of the clicked star
        const tooltipContent = (star as HTMLElement).getAttribute('data-tooltip');
        if (tooltipContent) {
          ratingDisplay.textContent = `Selected: ${tooltipContent}`;
        }
      });
    });
  }
}
