Package.describe({
  name: 'min-max-font-size',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('min-max-font-size.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('min-max-font-size');
  api.addFiles('min-max-font-size-tests.js');
});
