import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search-engine-optimization',
  templateUrl: './search-engine-optimization.component.html',
  styleUrls: ['./search-engine-optimization.component.css']
})
export class SearchEngineOptimizationComponent implements AfterViewInit {

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
