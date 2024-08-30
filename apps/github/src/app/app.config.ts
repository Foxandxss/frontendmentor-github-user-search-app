import { type ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideDataAccessApi } from '@github/shared-data-access-api';
import { provideEnvironment } from '@github/shared-util-environment';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideEnvironment(environment),
    provideRouter(appRoutes),
    provideStore(),
    provideStoreDevtools({
      name: 'Github',
      logOnly: !isDevMode(),
    }),
    provideDataAccessApi(),
  ],
};
