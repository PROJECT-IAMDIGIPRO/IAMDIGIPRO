import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrls: ['./consult-us.component.css']
})
export class ConsultUsComponent implements AfterViewInit {

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