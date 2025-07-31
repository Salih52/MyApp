import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideTranslateLoader } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperinceComponent } from './experince/experince.component';
import { provideTranslateService, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ExperinceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgxParticlesModule,
    BrowserAnimationsModule,
    TranslateModule,
  ],
  providers: [
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
