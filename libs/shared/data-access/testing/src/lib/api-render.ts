import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { type Type } from '@angular/core';
import { provideDataAccessApi } from '@github/shared-data-access-api';
import { type RenderComponentOptions, render } from '@testing-library/angular';

export const renderWithApi = <ComponentType>(
  component: Type<ComponentType>,
  renderOptions: RenderComponentOptions<ComponentType> = {},
) => {
  return render(component, {
    ...renderOptions,
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      provideDataAccessApi(),
      ...(renderOptions.providers ?? []),
    ],
  });
};
