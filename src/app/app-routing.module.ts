import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { BlogsComponent } from './blogs/blogs.component';
import { ConsultUsComponent } from './consult-us/consult-us.component';
import { TrainingComponent } from './training/training.component';
import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';
import { InternshipComponent } from './internship/internship.component';

const routes: Routes = [

   {path: '', redirectTo: '#', pathMatch: 'full' },
   {path:'searchengineoptimization',component: SearchEngineOptimizationComponent},
   {path:'searchenginemarketing',component: SearchEngineMarketingComponent},
   {path:'influencermarketing',component: InfluencerMarketingComponent},
   {path:'socialmediaoptimization',component: SocialMarketingOptimizationComponent},
   {path:'webappdevelopment',component: WebAppDevelopmentComponent},
   {path:'contentdevelopmenmMarketing',component: ContentDevelopmentMarketingComponent},
   {path:'emailmarketing',component: EmailMarketingComponent},
   {path:'graphicuidesign',component: GraphicUIDesignComponent},
   {path:'leadgeneration',component: LeadGenerationComponent},
   {path:'consulting',component: ConsultingComponent},
   {path:'login',component: LogInComponent},
   {path:'signup',component: SignUpComponent},
   {path:'registration',component: RegistrationComponent},
   {path:'portfolio',component: PortfolioComponent},
   {path:'aboutus',component: AboutUsComponent},
   {path:'blogs',component: BlogsComponent},
   {path:'consultus',component: ConsultUsComponent},

  //   CARRERS
   {path:'training',component: TrainingComponent},
   {path:'jobopportunity',component: JobOpportunityComponent},
   {path:'internship',component: InternshipComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
