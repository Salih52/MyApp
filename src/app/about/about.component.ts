import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Initialize AOS (Animate On Scroll) after the view has been initialized
    import('aos').then(AOS => {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once while scrolling down
      });
    });
  }
}
