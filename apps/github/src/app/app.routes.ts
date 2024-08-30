import { type Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@github/github-feature-shell').then((m) => m.githubFeatureShellRoutes),
  },
];
