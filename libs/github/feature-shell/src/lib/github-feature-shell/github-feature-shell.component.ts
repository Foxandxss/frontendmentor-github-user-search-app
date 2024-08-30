import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'github-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container p-4">
      <header>
        <h1>github Project</h1>
      </header>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubFeatureShellComponent {}
