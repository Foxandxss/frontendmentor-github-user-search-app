import { type Route } from '@angular/router';

import { GithubFeatureShellComponent } from './github-feature-shell/github-feature-shell.component';

const children: Route[] = [
  {
    path: '',
    loadChildren: () => import('@github/github-feature-home').then((m) => m.githubFeatureHomeRoutes),
  },
];

export const githubFeatureShellRoutes: Route[] = [{ path: '', component: GithubFeatureShellComponent, children }];
