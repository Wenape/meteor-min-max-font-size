Package.describe({
  name: "wenape:min-max-font-size",
  summary: "Using vw or vh CSS units? Set a min or max font-size for your type.",
  version: "1.0.0",
  git: 'https://github.com/Wenape/meteor-min-max-font-size'
});

Package.on_use(function(api) {
    api.add_files('client/mm-fontsize.js', 'client');
});
