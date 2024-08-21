import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faPinterest, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faArrowRight , faBars , faTimes , faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';


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
  isGraphicUIDesignRoute = false;
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
  isPrivacyPolicyRoute = false;
  isTermsRoute = false;
  isCookiesRoute = false;

  visibleSection = 1;

  faqs = [
    {
      question: "What digital marketing services do you offer at IAM Digipro?",
      answer: "At IAM Digipro, we offer a wide range of digital marketing services, including search engine marketing (SEM), social media advertising, digital analytics, online reputation management, and affiliate marketing. Our goal is to boost your online presence and achieve tangible results.",
      isOpen: false
    },
    {
      question: "How can IAM Digipro improve my website's performance?",
      answer: "We can help enhance your website through responsive web design, custom web application development, website security enhancements, API integrations, and performance optimization. Whether you need a new site or updates to an existing one, we've got you covered.",
      isOpen: false
    },
    {
      question: "What graphic design services are available at IAM Digipro? ",
      answer: "Our graphic design services include packaging design, motion graphics, typography design, brand style guides, and digital illustration. We aim to make your brand visually appealing and memorable.",
      isOpen: false
    },
    {
      question: "What consulting services does IAM Digipro provide? ",
      answer: "We offer strategic consulting in areas like strategic planning, customer experience (CX), data governance, risk management, and business continuity planning. We're here to help you develop effective strategies and improve your operations.",
      isOpen: false
    },
    {
      question: 'Can you work with influencers on different social media platforms?',
      answer: 'Digital marketing encompasses all marketing efforts that use the internet or an electronic device. It is important because it allows businesses to reach a larger audience, target specific demographics, and measure the effectiveness of their campaigns in real time.',
      isOpen: false
    }
  ];
  
  faInstagram = faInstagram;
faFacebook = faFacebook;
faLinkedin = faLinkedin;
faYoutube = faYoutube;
faPinterest = faPinterest;
faThreads = faThreads;
faArrowUp = faArrowUp;
faArrowRight = faArrowRight;
faBars = faBars;
faTimes = faTimes;
faStar = faStar;
faStarHalfAlt = faStarHalfAlt;

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
    this.title.setTitle('IAM Digipro');
    // this.title.setTitle('IamDigiPro:Innovative Digital Marketing & Branding for Your Business/Hyderabad');
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
    this.isGraphicUIDesignRoute = url.startsWith('/graphicuidesign');
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
    this.isCPRoute = url.startsWith('/cookies');
    this.isTOURoute = url.startsWith('/terms');

    this.isServiceRoute = this.isSEORoute || this.isSEMRoute ||
      this.isSMORoute ||this.isGraphicUIDesignRoute || this.isIMRoute || this.isWADRoute ||
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
  closeMenu() {
    const menuCheckbox = document.getElementById('menu-btn') as HTMLInputElement;
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

  cards = [
    {
      id: 1,
      title: "Search Engine Optimization",
      desc: "Enhancing website visibility on search engines through organic methods, improving rankings for targeted keywords.",
      photo: "assets/images/homeContent/Search-Engine-Optimization.jpg",
      link: "/searchengineoptimization"
    },
    {
      id: 2,
      title: "Search Engine Marketing",
      desc: "Paid advertising on search engines like Google Ads to increase visibility and drive traffic to your website.",
      photo: "assets/images/homeContent/Search-Engine-Marketing.jpg",
      link: "/searchenginemarketing"
    },
    {
      id: 3,
      title: "Social Media Optimization",
      desc: "Maximizing the visibility of social media profiles by optimizing content and strategies, boosting engagement, and increasing followers.",
      photo: "assets/images/homeContent/Social-Media-Optimization.jpg",
      link: "/socialmediaoptimization"
    },
    {
      id: 4,
      title: "Graphic UI & UX Design",
      desc: "Designing visual content, including logos, branding materials, and user interfaces for websites and apps.",
      photo: "assets/images/homeContent/Graphic_UI-Design.jpg",
      link: "/graphicuidesign"
    },
    {
      id: 5,
      title: "Influencer Marketing",
      desc: "Collaborating with influencers to promote products or services, leveraging their reach and credibility to target audiences.",
      photo: "assets/images/homeContent/Influencer-Marketing.jpg",
      link: "/influencermarketing"
    },
    {
      id: 6,
      title: "Web/App Development",
      desc: "Creating and maintaining websites or mobile apps that are responsive, user-friendly, and aligned with client needs.",
      photo: "assets/images/homeContent/Web_App-Development.jpg",
      link: "/webappdevelopment"
    },
    {
      id: 7,
      title: "Content Development",
      desc: "Producing valuable content (blogs, videos, infographics) and promoting it to attract and engage a target audience.",
      photo: "assets/images/homeContent/Content-Development-&-Marketing.jpg",
      link: "/contentdevelopmenmMarketing"
    },
    {
      id: 8,
      title: "Lead generation",
      desc: "Identifying and cultivating potential customers for business-to-business (B2B) and business-to-consumer (B2C) services.",
      photo: "assets/images/homeContent/Lead-generation-B2B-&-B2C.jpg",
      link: "/leadgeneration"
    },
    {
      id: 9,
      title: "Consulting",
      desc: "Providing expert advice and strategies to help businesses improve their digital marketing efforts and overall online presence",
      photo: "assets/images/homeContent/Consulting.jpg",
      link: "/consulting"
    },
    {
      id: 10,
      title: "Email Marketing",
      desc: "Using email campaigns to nurture leads, maintain customer relationships, and promote services or products.",
      photo: "assets/images/homeContent/Email-Marketing.jpg",
      link: "/emailmarketing"
    }
  ];

  currentNum = 0;

  get currentCard() {
    return this.cards[this.currentNum];
  }

  playForward() {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "sine.out" },
      onComplete: () => {
        if (this.currentNum >= this.cards.length - 1) {
          this.currentNum = 0;
        } else {
          this.currentNum++;
        }
        this.playReverse();
      }
    });

    tl.to("#mask-1", { yPercent: 100, scaleY: 1.4 })
    .to("#mask-2", { yPercent: -100, scaleY: 1.4 }, "<")
    .to("#card-info-title", { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }, "<0.4")
    .to("#card-info-desc", { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }, "<0.3");
}

    playReverse() {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "sine.in" }
      });

      tl.to("#mask-1", { yPercent: -100, scaleY: 1.4 })
      .to("#mask-2", { yPercent: 100, scaleY: 1.4 }, "<")
      .to("#card-info-title", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, "<0.2")
      .to("#card-info-desc", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, "<0.3");
  }

  nextCard(event: Event) {
    event.preventDefault();  // Prevent default action of anchor tag
    this.playForward();
  }

  navigateToCard() {
    this.router.navigate([this.currentCard.link]);
  }
}


function polygon(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): gsap.TweenValue | undefined {
  throw new Error('Function not implemented.');
}

