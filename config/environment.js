/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix:    'ember-search-likes',
    podModulePrefix: 'ember-search-likes/pods',
    environment:     environment,
    rootURL:         process.env.ESL_GH_PAGES ? '/ember-search-likes/' : '/',
    locationType:    'auto',
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

    SystemENV: process.env,

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      authenticationRoute:         'hello',
      routeAfterAuthentication:    'authenticated',
      routeIfAlreadyAuthenticated: 'authenticated',
    },

    'vk-settings': {
      appId:   process.env.FACEBOOK_APP_ID      || '5480399',
      version: process.env.FACEBOOK_API_VERSION || '5.62',
      scope:   process.env.FACEBOOK_SCOPE       || +2
    }
    /*
    * +2 -> friends
    *
    * */
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {

  }

  return ENV
}
