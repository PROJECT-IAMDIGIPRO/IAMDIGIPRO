import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isServiceRoute = false;
  isSEORoute = false;
  isSEMRoute = false;
  isSMORoute = false;
  isIMRoute = false;
  isWADRoute = false;
  isCDMRoute = false;
  isLGRoute = false;
  isConsultingRoute = false;
  isEMRoute = false;
  isAboutRoute = false;
  isTrainingRoute = false;
  isInternshipRoute = false;
  isJORoute = false;
  isPortfolioRoute = false;
  isBlogsRoute = false;
  isCURoute = false;
  isLoginRoute = false;
  isSignUpRoute = false;
  isRegisterRoute = false;
  isPPRoute = false;
  isCPRoute = false;
  isTOURoute = false;

  visibleSection = 1;

  faqs = [
    {
      question: 'What is digital marketing and why is it important for my business?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'What is the process for developing a website with your company?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'What graphic design services do you offer?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'What is influencer marketing and how can it benefit my business?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    },
    {
      question: 'Can you work with influencers on different social media platforms?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    }
  ];

  constructor(private router: Router, private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteFlags(event.url);
      }
    });
  }

  setMetaTags(): void {
    this.title.setTitle('IamDigiPro:Innovative Digital Marketing & Branding for Your Business/Hyderabad');
    this.meta.addTags([
      { name: 'description', content: 'IamDigiPro provides comprehensive digital marketing and branding solutions. We help boutiques,salons,dental clinics & All other Business stand out with creative designs and strategic promotions.' },
      { name: 'keywords', content: 'best digital marketing agency hyderabad,digital advertising company in hyderabad,advertising agency hyderabad,influence marketing,web development,social marketing digital,performance marketing optimization' },
      { name: 'author', content: 'https://iamdigipro.com' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'follow' },
      { name: 'canonical', content: 'https://iamdigipro.com/' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'IamDigiPro:Innovative Digital Marketing & Branding for Your Business/Hyderabad' },
      { property: 'og:description', content: 'IamDigiPro provides comprehensive digital marketing and branding solutions. We help boutiques,salons,dental clinics & All other Business stand out with creative designs and strategic promotions.' },
      { property: 'og:url', content: 'https://iamdigipro.com/' },
      { property: 'og:site_name', content: 'IamDigipro' },
      { property: 'article:modified_time', content: '2024-08-06T07:58:34+00:00' },
      { property: 'og:image:width', content: '1259' },
      { property: 'og:image:height', content: '708' },
      { property: 'og:image', content: 'content/uploads/2024/08/Homepagevideo' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }

  updateRouteFlags(url: string): void {
    this.isSEORoute = url.startsWith('/searchengineoptimization');
    this.isSEMRoute = url.startsWith('/searchenginemarketing');
    this.isSMORoute = url.startsWith('/socialmediaoptimization');
    this.isIMRoute = url.startsWith('/influencermarketing');
    this.isWADRoute = url.startsWith('/webappdevelopment');
    this.isCDMRoute = url.startsWith('/contentdevelopmenmMarketing');
    this.isLGRoute = url.startsWith('/leadgeneration');
    this.isConsultingRoute = url.startsWith('/consulting');
    this.isEMRoute = url.startsWith('/emailmarketing');
    this.isAboutRoute = url.startsWith('/aboutus');
    this.isTrainingRoute = url.startsWith('/training');
    this.isInternshipRoute = url.startsWith('/internship');
    this.isJORoute = url.startsWith('/jobopportunity');
    this.isPortfolioRoute = url.startsWith('/portfolio');
    this.isBlogsRoute = url.startsWith('/blogs');
    this.isCURoute = url.startsWith('/consultus');
    this.isLoginRoute = url.startsWith('/login');
    this.isSignUpRoute = url.startsWith('/signup');
    this.isRegisterRoute = url.startsWith('/registration');
    this.isPPRoute = url.startsWith('/privacypolicy');
    this.isCPRoute = url.startsWith('/cookiepolicy');
    this.isTOURoute = url.startsWith('/terms');

    this.isServiceRoute = this.isSEORoute || this.isSEMRoute ||
      this.isSMORoute || this.isIMRoute || this.isWADRoute ||
      this.isCDMRoute || this.isLGRoute || this.isConsultingRoute ||
      this.isEMRoute || this.isAboutRoute || this.isTrainingRoute ||
      this.isInternshipRoute || this.isJORoute || this.isPortfolioRoute ||
      this.isBlogsRoute || this.isCURoute || this.isLoginRoute || this.isSignUpRoute ||
      this.isRegisterRoute || this.isPPRoute || this.isCPRoute || this.isTOURoute;
  }

  toggleSection(currentSection: number) {
    switch (currentSection) {
      case 1:
        this.visibleSection = 2;
        break;
      case 2:
        this.visibleSection = 3;
        break;
      case 3:
        this.visibleSection = 4;
        break;
      case 4:
        this.visibleSection = 5;
        break;
      case 5:
        this.visibleSection = 1;
        break;
      default:
        this.visibleSection = 1;
        break;
    }
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
