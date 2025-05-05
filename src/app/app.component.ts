import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'jobrite';
}
