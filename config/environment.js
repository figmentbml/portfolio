/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'portfolio',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    contentSecurityPolicyHeader: 'Content-Security-Policy-Report-Only',

    contentSecurityPolicy: {
      'default-src': ["'none'"],
      'script-src': ["'self'"], // Allow scripts from https://cdn.mxpnl.com
      'font-src': ["'self'", "http://fonts.gstatic.com", "http://maxcdn.bootstrapcdn.com/"],  // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': ["'self'"],
      'img-src': ["'self'", "https://codeclimate.com/github/figmentbml/", "https://travis-ci.org/"],
      'style-src': ["'self'", "'unsafe-inline'"], // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': ["'self'"],
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
