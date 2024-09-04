import { Component } from '@angular/core';

@Component({
  selector: 'app-job-opportunity',
  templateUrl: './job-opportunity.component.html',
  styleUrl: './job-opportunity.component.css'
})
export class JobOpportunityComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true; // Open the modal when the button is clicked
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.showModal = false; // Close the modal when the event is triggered
    document.body.classList.remove('modal-open'); 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeSearch();
  }

  initializeSearch(): void {
    const searchButton = document.querySelector('.btn.btn-primary');
    if (searchButton) {
      searchButton.addEventListener('click', () => this.filterJobs());
    }
  }

  filterJobs(): void {
    const skillsInput = (document.getElementById('search-skills') as HTMLInputElement).value.toLowerCase();
    const experienceInput = (document.getElementById('search-experience') as HTMLInputElement).value.toLowerCase();
    const jobUpdates = Array.from(document.querySelectorAll('.company-details'));

    const matchingJobs: Element[] = [];
    const nonMatchingJobs: Element[] = [];

    jobUpdates.forEach((job: Element) => {
      const jobTitle = (job.querySelector('h4') as HTMLElement).textContent?.toLowerCase() || '';
      const experience = (job.querySelector('span') as HTMLElement).textContent?.toLowerCase() || '';
      const skills = (job.querySelector('.description') as HTMLElement).textContent?.toLowerCase() || '';

      const matchesSkills = skillsInput === '' || skills.includes(skillsInput) || jobTitle.includes(skillsInput);
      const matchesExperience = experienceInput === '' || experience.includes(experienceInput);

      if (matchesSkills && matchesExperience) {
        matchingJobs.push(job);
      } else {
        nonMatchingJobs.push(job);
      }
    });

    const container = document.querySelector('.container-jo');
    if (container) {
      container.innerHTML = '';
      matchingJobs.forEach((job) => container.appendChild(job));
      nonMatchingJobs.forEach((job) => container.appendChild(job));
    }
  }
}