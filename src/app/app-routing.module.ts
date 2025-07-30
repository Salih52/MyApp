import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperinceComponent } from './experince/experince.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  {path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  {path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }},
  {path: 'experience', component: ExperinceComponent, data: { animation: 'ExperincePage' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
