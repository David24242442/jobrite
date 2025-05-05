import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideAnimations} from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideAnimations() // Add animations provider here
  ]
}).catch((err) => console.error(err));
