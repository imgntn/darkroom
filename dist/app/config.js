// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {
    // Make vendor easier to access.
    "vendor": "../vendor",

    // Almond is used to lighten the output filesize.
    "almond": "../vendor/bower/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

    // Map remaining vendor dependencies.
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",

    "_typeface_js": "../vendor/typeface-0.15",
    "helvetiker": "modules/fonts/helvetiker_regular.typeface",
    "three": "../vendor/three",
    "threex": "../vendor/THREEx.KeyboardState"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },
    "three": {
      exports: "THREE"
    },
    "threex": {
      deps: ["three"],
      exports: "THREEx"
    },
    "_typeface_js": {
      exports: "_typeface_js"
    },
    "helvetiker": {
      deps: ['_typeface_js', 'three']
    },
    "bazar": {
      deps: ['_typeface_js']
    }

  }
});