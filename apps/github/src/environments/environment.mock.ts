import { type Environment } from '@github/shared-util-environment';
import { setupWorker } from 'msw/browser';

const onBootstrapAppInit = async () => {
  const worker = setupWorker();

  await worker.start({ onUnhandledRequest: 'bypass' });
};

export const environment: Environment = {
  baseAPI: '',
  onBootstrapAppInit,
};
