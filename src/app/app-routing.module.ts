import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from 'src/app/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
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
    path: 'company-profile',
    loadChildren: () => import('./company-profile-module/company-profile.module').then(m => m.CompanyProfileModule)
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
