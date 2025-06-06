import { playwrightLauncher } from '@web/test-runner-playwright';
import { jasmineTestRunnerConfig } from 'web-test-runner-jasmine';

export default {
  ...jasmineTestRunnerConfig(),
  files: 'test/jasmine/specs/**/*.spec.js',
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })],
};
