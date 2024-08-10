import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchEngineOptimizationComponent } from './search-engine-optimization/search-engine-optimization.component';
import { SearchEngineMarketingComponent } from './search-engine-marketing/search-engine-marketing.component';
import { InfluencerMarketingComponent } from './influencer-marketing/influencer-marketing.component';
import { SocialMarketingOptimizationComponent } from './social-marketing-optimization/social-marketing-optimization.component';
import { WebAppDevelopmentComponent } from './web-app-development/web-app-development.component';
import { ContentDevelopmentMarketingComponent } from './content-development-marketing/content-development-marketing.component';
import { EmailMarketingComponent } from './email-marketing/email-marketing.component';
import { GraphicUIDesignComponent } from './graphic-uidesign/graphic-uidesign.component';
import { LeadGenerationComponent } from './lead-generation/lead-generation.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistrationComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConsultUsComponent } from './consult-us/consult-us.component';
import { TrainingComponent } from './training/training.component';
import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';
import { InternshipComponent } from './internship/internship.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgParticlesModule } from 'ng-particles'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    SearchEngineOptimizationComponent,
    SearchEngineMarketingComponent,
    InfluencerMarketingComponent,
    SocialMarketingOptimizationComponent,
    WebAppDevelopmentComponent,
    ContentDevelopmentMarketingComponent,
    EmailMarketingComponent,
    GraphicUIDesignComponent,
    LeadGenerationComponent,
    ConsultingComponent,
    LogInComponent,
    SignUpComponent,
    RegistrationComponent,
    PortfolioComponent,
    AboutUsComponent,
    ConsultUsComponent,
    TrainingComponent,
    JobOpportunityComponent,
    InternshipComponent,
    BlogsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgParticlesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faEnvelope, faPhone, faTwitter, faWhatsapp );
  }
 }
