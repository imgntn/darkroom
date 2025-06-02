import { playwrightLauncher } from '@web/test-runner-playwright';
import { jasmine } from '@web/test-runner-jasmine';

export default {
  files: 'test/jasmine/specs/**/*.spec.js',
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })],
  plugins: [jasmine()],
};
