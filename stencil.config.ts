import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-text-skeleton-loader',
  plugins: [
    sass(),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'stencil-text-skeleton-loader',
      proxiesFile: '../stencil-text-skeleton-loader-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
