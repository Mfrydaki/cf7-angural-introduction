import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//Import for HTTP client service
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient , withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    
    //For HTTP client service
    provideAnimationsAsync(), provideHttpClient(withInterceptorsFromDi())
   
  ]
};
