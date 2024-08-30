import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'github-feature-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>github-feature-home works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubFeatureHomeComponent {}
