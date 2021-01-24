import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from 'src/app/page-not-found/page-not-found.component';
import {CompanyResolverService} from 'src/app/services/company-resolver.service';
import {ContactPageComponent} from './contact-page/contact-page.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import ('./landing-module/landing-module.module').then(m => m.LandingModuleModule)
  },
  {
    path: 'create-job',
    loadChildren: () => import('./create-job-module/create-job.module').then(m => m.CreateJobModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-module/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs-module/jobs.module').then(m => m.JobsModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies-module/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'company-profile/:id',
    loadChildren: () => import('./company-profile-module/company-profile.module').then(m => m.CompanyProfileModule),
    resolve: {company: CompanyResolverService}
  },
  {
    path: 'candidate-profile',
    loadChildren: () => import('./candidate-profile-module/candidate-profile.module').then(m => m.CandidateProfileModule)
  },
  {
    path: 'employer-profile',
    loadChildren: () => import('./employer-profile-module/employer-profile.module').then(m => m.EmployerProfileModule)
  },
  {
    path: 'job-detail',
    loadChildren: () => import('./job-detail-module/job-detail.module').then((m => m.JobDetailModule))
  },
  {
    path: 'apply-job',
    loadChildren: () => import('./apply-job-module/apply-job.module').then(m => m.ApplyJobModule)
  },
  {
    path: 'create-company',
    loadChildren: () => import('./create-company-module/create-company.module').then(m => m.CreateCompanyModule)
  },
  {
    path: 'manage-resume',
    loadChildren: () => import('./manage-resume-module/manage-resume.module').then(m => m.ManageResumeModule)
  },
  {
    path: 'contact', component: ContactPageComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
