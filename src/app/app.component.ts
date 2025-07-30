import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements AfterViewInit {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['tr', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

  ngAfterViewInit(): void {
    // Initialize AOS (Animate On Scroll) after the view has been initialized
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once while scrolling down
      });
    });
  }
  title = 'MyApp';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
