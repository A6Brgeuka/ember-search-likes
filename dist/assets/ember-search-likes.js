"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ember-search-likes/adapters/application', ['exports', 'ember-data/adapters/json-api'], function (exports, _emberDataAdaptersJsonApi) {
  exports['default'] = _emberDataAdaptersJsonApi['default'].extend({});
});
define('ember-search-likes/adapters/user', ['exports', 'ember-search-likes/adapters/application', 'ember-service/inject'], function (exports, _emberSearchLikesAdaptersApplication, _emberServiceInject) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  // import RSVP    from 'rsvp'

  exports['default'] = _emberSearchLikesAdaptersApplication['default'].extend({

    // ----- Services -----
    vkService: (0, _emberServiceInject['default'])(),
    session: (0, _emberServiceInject['default'])(),

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    // findRecord (store, type, id, snapshot) {
    //   return this.get('vkService').getUser([id])
    //     .then(u => {
    //       debugger
    //       return u[0]
    //     })
    // },

    // ----- Custom Methods -----
    getCurrentUser: function getCurrentUser(params) {
      var _this = this;

      return this.get('vkService').getUsers(params).then(function (_ref) {
        var _ref$response = _slicedToArray(_ref.response, 1);

        var user = _ref$response[0];

        var store = _this.get('store');
        var modelClass = store.modelFor('user');
        var serializer = store.serializerFor('user');
        var normalized = serializer.normalize(modelClass, user, user.id, 'findRecord');
        return store.push(normalized);
      });
    },

    getFriends: function getFriends(params) {
      var _this2 = this;

      return this.get('vkService').getFriends(params).then(function (_ref2) {
        var _ref2$response = _ref2.response;
        var count = _ref2$response.count;
        var items = _ref2$response.items;

        var store = _this2.get('store');
        var modelClass = store.modelFor('user');
        var serializer = store.serializerFor('user');
        var normalized = serializer.normalizeResponse(store, modelClass, items, null, 'findAll');
        return store.push(normalized);
      });
    }

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define('ember-search-likes/app', ['exports', 'ember', 'ember-search-likes/resolver', 'ember-load-initializers', 'ember-search-likes/config/environment'], function (exports, _ember, _emberSearchLikesResolver, _emberLoadInitializers, _emberSearchLikesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberSearchLikesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberSearchLikesConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberSearchLikesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberSearchLikesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-search-likes/authenticators/custom-vk-auth', ['exports', 'ember-simple-auth/authenticators/base', 'rsvp'], function (exports, _emberSimpleAuthAuthenticatorsBase, _rsvp) {
  exports['default'] = _emberSimpleAuthAuthenticatorsBase['default'].extend({

    // ----- Services -----

    // ----- Overridden Methods -----
    restore: function restore(data) {
      return _rsvp['default'].resolve(data);
    },

    authenticate: function authenticate(args) {
      return _rsvp['default'].resolve(args);
    }
  });
});
define('ember-search-likes/components/x-toggle', ['exports', 'ember-cli-toggle/components/x-toggle/component', 'ember-search-likes/config/environment'], function (exports, _emberCliToggleComponentsXToggleComponent, _emberSearchLikesConfigEnvironment) {

  var config = _emberSearchLikesConfigEnvironment['default']['ember-cli-toggle'] || {};

  exports['default'] = _emberCliToggleComponentsXToggleComponent['default'].extend({
    theme: config.defaultTheme || 'default',
    defaultOffLabel: config.defaultOffLabel || 'Off::off',
    defaultOnLabel: config.defaultOnLabel || 'On::on',
    showLabels: config.defaultShowLabels || false,
    size: config.defaultSize || 'medium'
  });
});
define('ember-search-likes/helpers/app-version', ['exports', 'ember', 'ember-search-likes/config/environment'], function (exports, _ember, _emberSearchLikesConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _emberSearchLikesConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ember-search-likes/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('ember-search-likes/helpers/is-after', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/is-before', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/is-between', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/is-same-or-after', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/is-same-or-before', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/is-same', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-add', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-calendar', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('ember-search-likes/helpers/moment-format', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-from-now', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-from', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-subtract', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-to-date', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-to-now', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-to', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ember-search-likes/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('ember-search-likes/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('ember-search-likes/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('ember-search-likes/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('ember-search-likes/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-search-likes/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _emberRouteActionHelperHelpersRouteAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteActionHelperHelpersRouteAction['default'];
    }
  });
});
define('ember-search-likes/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-search-likes/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('ember-search-likes/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('ember-search-likes/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-search-likes/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberSearchLikesConfigEnvironment) {
  var _config$APP = _emberSearchLikesConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ember-search-likes/initializers/browser/ember-cli-webfontloader', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-cli-webfontloader/initializers/browser/ember-cli-webfontloader'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberCliWebfontloaderInitializersBrowserEmberCliWebfontloader) {
    exports['default'] = {
        name: 'ember-cli-webfontloader',
        initialize: function initialize() {
            var config = _ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'webFontConfig') || {};
            (0, _emberCliWebfontloaderInitializersBrowserEmberCliWebfontloader['default'])(config);
        }
    };
});
define('ember-search-likes/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-search-likes/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-search-likes/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('ember-search-likes/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-search-likes/initializers/ember-simple-auth', ['exports', 'ember-search-likes/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _emberSearchLikesConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _emberSearchLikesConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _emberSearchLikesConfigEnvironment['default'].rootURL || _emberSearchLikesConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('ember-search-likes/initializers/export-application-global', ['exports', 'ember', 'ember-search-likes/config/environment'], function (exports, _ember, _emberSearchLikesConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberSearchLikesConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberSearchLikesConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberSearchLikesConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-search-likes/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-search-likes/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-search-likes/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-search-likes/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-search-likes/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('ember-search-likes/macros/search-array-by-prop', ['exports', 'ember-computed', 'ember-metal/get'], function (exports, _emberComputed, _emberMetalGet) {
  exports['default'] = searchArrayByProp;

  function searchArrayByProp(searchableArray, propName, searchInput) {

    return (0, _emberComputed['default'])(searchableArray + '.@each.' + propName, searchInput, function () {
      var array = this.get(searchableArray);
      var input = (this.get(searchInput) || '').toLowerCase();

      if (input === '') return array;

      return array.filter(function (item) {
        return (0, _emberMetalGet['default'])(item, propName).toLowerCase().indexOf(input) > -1;
      });
    });
  }
});
define('ember-search-likes/models/user', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-computed', 'moment'], function (exports, _emberDataModel, _emberDataAttr, _emberComputed, _moment) {
  exports['default'] = _emberDataModel['default'].extend({

    // ----- Attributes -----
    domain: (0, _emberDataAttr['default'])('string'),
    firstName: (0, _emberDataAttr['default'])('string'),
    lastName: (0, _emberDataAttr['default'])('string'),
    nickName: (0, _emberDataAttr['default'])('string'),
    online: (0, _emberDataAttr['default'])('number'),
    onlineMobile: (0, _emberDataAttr['default'])('number'),
    photo_50: (0, _emberDataAttr['default'])('string'),
    photo_100: (0, _emberDataAttr['default'])('string'),
    photo_200: (0, _emberDataAttr['default'])('string'),
    sex: (0, _emberDataAttr['default'])('number'),
    lastSeenTime: (0, _emberDataAttr['default'])(), //unix time: 1489407773
    lastSeenPlatform: (0, _emberDataAttr['default'])('number'), //platform : 7

    // падежы
    // винительный
    firstNameAcc: (0, _emberDataAttr['default'])('string'),
    // родительный
    firstNameGen: (0, _emberDataAttr['default'])('string'),
    // ----- Relationships -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----
    onlineStatusText: (0, _emberComputed['default'])('online', function () {
      if (this.get('online')) {
        return "Online";
      }
      var was = this.get('sex') === 1 ? "была" : "был";
      var timeAgo = this.get('timeAgo');

      return was + ' в сети ' + timeAgo;
    }),
    timeAgo: (0, _emberComputed['default'])('lastSeenTime', function () {
      return _moment['default'].unix(this.get('lastSeenTime')).fromNow();
    }),

    name: (0, _emberComputed['default'])('firstName', 'lastName', function () {
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');

      if (firstName && lastName) {
        return lastName + ', ' + firstName;
      }

      return 'unknown';
    })

  });
});

// import {hasMany, belongsTo}  from 'ember-data/relationships'
// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----
define('ember-search-likes/pods/application/controller', ['exports', 'ember-controller', 'ember-service/inject'], function (exports, _emberController, _emberServiceInject) {
  exports['default'] = _emberController['default'].extend({

    // ----- Services -----
    session: (0, _emberServiceInject['default'])()

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define('ember-search-likes/pods/application/route', ['exports', 'ember-route', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _emberRoute, _emberSimpleAuthMixinsApplicationRouteMixin) {
  exports['default'] = _emberRoute['default'].extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    // model() {
    //  should load friends
    //   /* jshint unused:false */
    //   const parentModel = this.modelFor('')
    //
    //   return RSVP.hash({
    //     /* jshint ignore:start */
    //     ...parentModel,
    //     /* jshint ignore:end */
    //   })
    // },

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define("ember-search-likes/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VXaj/pAi", "block": "{\"statements\":[[\"block\",[\"sec-tion\"],null,null,2],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Список друзей\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"text-align: center\"],[\"flush-element\"],[\"text\",\"\\n    @logo@ Ember search likes\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"authenticated.friends\"],null,0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"log\"],[[\"get\",[\"session\",\"isAuthenticated\"]],\"session.isAuthenticated\"],null],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,1],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/application/template.hbs" } });
});
define('ember-search-likes/pods/authenticated/friends/controller', ['exports', 'ember-controller', 'ember-computed', 'ember-awesome-macros', 'ember-search-likes/macros/search-array-by-prop'], function (exports, _emberController, _emberComputed, _emberAwesomeMacros, _emberSearchLikesMacrosSearchArrayByProp) {
  exports['default'] = _emberController['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----
    // queryParams: [
    //   {'searchInput': 'search'}
    // ],
    //
    //
    // // ----- Static properties -----
    // off: 'off',
    // on:  'on',
    //
    // searchInput: '',
    // isMale:      'off',
    // isFemale:    'off',
    //
    //
    // // ----- Computed properties -----
    // users:       reads('model.friends'),
    // maleUsers:   filterBy('users', 'sex', 2),
    // femaleUsers: filterBy('users', 'sex', 1),
    //
    //
    // isAll: and(equal('isMale', 'off'), equal('isFemale', 'off')),
    //
    // maleOrFemaleOrAllUsers: conditional(
    //   'isAll',
    //   'users',
    //   conditional(
    //     equal('isMale', 'on'),
    //     'maleUsers',
    //     conditional(
    //       equal('isFemale', 'on'),
    //       'femaleUsers',
    //       'users'
    //     )
    //   ),
    // ),
    //
    // usersFiltered: searchArrayByProp('maleOrFemaleOrAllUsers', 'name', 'searchInput'),
    //
    //
    //
    // // ----- Overridden Methods -----
    //
    //
    //
    // // ----- Custom Methods -----
    //
    //
    //
    // // ----- Events and observers -----
    //
    //
    //
    // // ----- Tasks -----
    //
    //
    //
    // // ----- Actions -----
    // actions: {
    //   toggleMale (obj) {
    //     if (obj.newValue === 'on') {
    //       this.set('isMale', 'on')
    //       this.set('isFemale', 'off')
    //     } else {
    //       this.set('isMale', 'off')
    //     }
    //   },
    //
    //   toggleFemale (obj) {
    //     if (obj.newValue === 'on') {
    //       this.set('isFemale', 'on')
    //       this.set('isMale', 'off')
    //     } else {
    //       this.set('isFemale', 'off')
    //     }
    //   }
    // }
  });
});
define('ember-search-likes/pods/authenticated/friends/friend/route', ['exports', 'ember-route', 'rsvp'], function (exports, _emberRoute, _rsvp) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    model: function model(_ref) {
      var user_id = _ref.user_id;

      var parentModel = this.modelFor('authenticated.friends');

      var selectedUser = parentModel.friends.findBy('id', user_id);

      return _rsvp['default'].hash(_extends({}, parentModel, {
        selectedUser: selectedUser
      }));
    }

  });
});
// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("ember-search-likes/pods/authenticated/friends/friend/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4IvQKYSH", "block": "{\"statements\":[[\"block\",[\"sec-tion\"],null,null,0],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-auth-friends-friend-section _profileCover\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-auth-friends-friend-section-profileCover _image\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"model\",\"selectedUser\",\"photo_200\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-auth-friends-friend-section-profileCover _info\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"model\",\"selectedUser\",\"firstName\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"model\",\"selectedUser\",\"lastName\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"findLikes\"]],[\"flush-element\"],[\"text\",\"\\n    Найти кого лайкает \"],[\"append\",[\"unknown\",[\"model\",\"selectedUser\",\"firstName\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"findComments\"]],[\"flush-element\"],[\"text\",\"\\n    Найти комменты к фоткам друзей\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/authenticated/friends/friend/template.hbs" } });
});
define('ember-search-likes/pods/authenticated/friends/index/controller', ['exports', 'ember-controller', 'ember-computed', 'ember-awesome-macros', 'ember-search-likes/macros/search-array-by-prop'], function (exports, _emberController, _emberComputed, _emberAwesomeMacros, _emberSearchLikesMacrosSearchArrayByProp) {
  exports['default'] = _emberController['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----
    queryParams: [{ 'searchInput': 'search' }],

    // ----- Static properties -----
    off: 'off',
    on: 'on',

    searchInput: '',
    isMale: 'off',
    isFemale: 'off',

    // ----- Computed properties -----
    users: (0, _emberComputed.reads)('model.friends'),
    maleUsers: (0, _emberComputed.filterBy)('users', 'sex', 2),
    femaleUsers: (0, _emberComputed.filterBy)('users', 'sex', 1),

    isAll: (0, _emberAwesomeMacros.and)((0, _emberAwesomeMacros.equal)('isMale', 'off'), (0, _emberAwesomeMacros.equal)('isFemale', 'off')),

    maleOrFemaleOrAllUsers: (0, _emberAwesomeMacros.conditional)('isAll', 'users', (0, _emberAwesomeMacros.conditional)((0, _emberAwesomeMacros.equal)('isMale', 'on'), 'maleUsers', (0, _emberAwesomeMacros.conditional)((0, _emberAwesomeMacros.equal)('isFemale', 'on'), 'femaleUsers', 'users'))),

    usersFiltered: (0, _emberSearchLikesMacrosSearchArrayByProp['default'])('maleOrFemaleOrAllUsers', 'name', 'searchInput'),

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    actions: {
      toggleMale: function toggleMale(obj) {
        if (obj.newValue === 'on') {
          this.set('isMale', 'on');
          this.set('isFemale', 'off');
        } else {
          this.set('isMale', 'off');
        }
      },

      toggleFemale: function toggleFemale(obj) {
        if (obj.newValue === 'on') {
          this.set('isFemale', 'on');
          this.set('isMale', 'off');
        } else {
          this.set('isFemale', 'off');
        }
      }
    }
  });
});
define('ember-search-likes/pods/authenticated/friends/index/route', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    // model() {
    //   /* jshint unused:false */
    //   const parentModel = this.modelFor('')
    //
    //   return RSVP.hash({
    //     /* jshint ignore:start */
    //     ...parentModel,
    //     /* jshint ignore:end */
    //   })
    // },

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define("ember-search-likes/pods/authenticated/friends/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NEMC7ejT", "block": "{\"statements\":[[\"append\",[\"helper\",[\"log\"],[[\"get\",[\"model\"]],\"model\"],null],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"log\"],[[\"get\",[\"usersFiltered\",\"length\"]],\"usersFiltered\"],null],false],[\"text\",\"\\n\"],[\"block\",[\"sec-tion\"],null,[[\"class\"],[\"page-auth-friends-section _filters\"]],1],[\"text\",\"\\n\"],[\"block\",[\"sec-tion\"],null,[[\"class\"],[\"page-auth-friends-section _users\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"friends-list\"],null,[[\"users\"],[[\"get\",[\"usersFiltered\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    у вас \"],[\"append\",[\"unknown\",[\"users\",\"length\"]],false],[\"text\",\" друзей\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-auth-friends-section-filters\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n      Парни\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"x-toggle\"],null,[[\"value\",\"onToggle\"],[[\"get\",[\"isMale\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleMale\"],null]]]],false],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n      Девушки\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"x-toggle\"],null,[[\"value\",\"onToggle\"],[[\"get\",[\"isFemale\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleFemale\"],null]]]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-auth-friends-section-filters _search\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"page-auth-friends-section-filters-search-input\",[\"get\",[\"searchInput\"]],\"Search...\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/authenticated/friends/index/template.hbs" } });
});
define('ember-search-likes/pods/authenticated/friends/route', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    // model() {
    //   /* jshint unused:false */
    //   const parentModel = this.modelFor('')
    //
    //   return RSVP.hash({
    //     /* jshint ignore:start */
    //     ...parentModel,
    //     /* jshint ignore:end */
    //   })
    // },

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define("ember-search-likes/pods/authenticated/friends/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4dfcOToa", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/authenticated/friends/template.hbs" } });
});
define('ember-search-likes/pods/authenticated/index/route', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    redirect: function redirect() {
      this.transitionTo('authenticated.friends');
    }
  });
});
// model() {
//   /* jshint unused:false */
//   const parentModel = this.modelFor('')
//
//   return RSVP.hash({
//     /* jshint ignore:start */
//     ...parentModel,
//     /* jshint ignore:end */
//   })
// },

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define('ember-search-likes/pods/authenticated/route', ['exports', 'ember-route', 'ember-simple-auth/mixins/authenticated-route-mixin', 'ember-service/inject', 'rsvp', 'npm:lodash'], function (exports, _emberRoute, _emberSimpleAuthMixinsAuthenticatedRouteMixin, _emberServiceInject, _rsvp, _npmLodash) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports['default'] = _emberRoute['default'].extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {

    // ----- Services -----
    session: (0, _emberServiceInject['default'])(),

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    model: function model(params, transition) {
      var store = this.get('store');

      return _rsvp['default'].hash({
        currentUser: this._fetchUserOrLogout(transition)
      }).then(function (model) {
        return _rsvp['default'].hash(_extends({}, model, {

          friends: store.adapterFor('user').getFriends({
            userId: model.currentUser.get('id'),
            fields: 'sex,domain,online,last_seen,photo_50,photo_100,photo_200,first_name_acc,first_name_gen',
            name_case: 'nom',
            order: 'random'
          })
        }));
      }).then(function (model) {
        if (!model.friends.get('length')) throw new Error('no_friends');
        return model;
      });
    },

    // ----- Custom Methods -----
    _fetchUserOrLogout: function _fetchUserOrLogout(transition) {
      var _this = this;

      var userId = this.get('session.data.authenticated.user_id');

      if (!userId) {
        transition.abort();
        this.get('session').invalidate();
        return;
      }

      return this.get('store').adapterFor('user').getCurrentUser({
        user_id: userId,
        fields: 'domain,sex'
      })['catch'](function (e) {

        // Logout if user isn't found or doesn't match the one stored in session
        if (e.errors && e.errors[0] && _npmLodash['default'].includes(['404', 404], e.errors[0].status)) {
          transition.abort();
          _this.get('session').invalidate(); // can't use this.send('logout') here
          return;
        }

        // On any other error, propagate the error
        throw e;
      });
    }

  });
});
// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define('ember-search-likes/pods/components/friends-list/component', ['exports', 'ember-component'], function (exports, _emberComponent) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----
    users: undefined,

    // ----- Services -----

    // ----- Overridden properties -----
    classNames: ['friendsList']

  });
});
// ----- Static properties -----

// ----- Computed properties -----

// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("ember-search-likes/pods/components/friends-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wC4snJN6", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"users\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"user-card\"],null,[[\"user\"],[[\"get\",[\"user\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/components/friends-list/template.hbs" } });
});
define('ember-search-likes/pods/components/last-seen-platform/component', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----
    user: undefined,

    // ----- Services -----

    // ----- Overridden properties -----
    classNameBindings: [':lastSeenPlatform', 'platformClass'],

    // ----- Static properties -----

    // ----- Computed properties -----
    platformClass: (0, _emberComputed['default'])('platform', function () {
      if (this.get('user.onlineMobile') || this.get('user.lastSeenPlatform') !== 7) {
        return '_mobile';
      }
    })

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define("ember-search-likes/pods/components/last-seen-platform/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E4J1pzqp", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/components/last-seen-platform/template.hbs" } });
});
define('ember-search-likes/pods/components/sec-tion/component', ['exports', 'ember-component'], function (exports, _emberComponent) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----

    // ----- Services -----

    // ----- Overridden properties -----
    classNameBindings: [':secTion', 'class'],
    tagName: 'section'

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define("ember-search-likes/pods/components/sec-tion/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fKc2tNtN", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"secTion-inner\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/components/sec-tion/template.hbs" } });
});
define('ember-search-likes/pods/components/user-card/component', ['exports', 'ember-component'], function (exports, _emberComponent) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----

    // ----- Services -----

    // ----- Overridden properties -----
    classNames: ['userCard']

  });
});
// ----- Static properties -----

// ----- Computed properties -----

// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("ember-search-likes/pods/components/user-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OwES/E51", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userCard-section _text\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userCard-section-text-name\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"authenticated.friends.friend\",[\"get\",[\"user\",\"id\"]]],[[\"class\"],[\"userCard-section-text-name-link\"]],2],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userCard-section-text-status\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"user\",\"onlineStatusText\"]],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"user\",\"lastSeenPlatform\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"authenticated.friends.friend\",[\"get\",[\"user\",\"id\"]]],[[\"class\"],[\"userCard-section _image\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"user\",\"photo_100\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"last-seen-platform\"],null,[[\"user\"],[[\"get\",[\"user\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"helper\",[\"concat\"],[[\"get\",[\"user\",\"firstName\"]],\" \",[\"get\",[\"user\",\"lastName\"]]],null],false]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/components/user-card/template.hbs" } });
});
define('ember-search-likes/pods/components/user-status-online/component', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----
    user: undefined,

    // ----- Services -----

    // ----- Overridden properties -----
    classNames: ['userStatusOnline'],

    // ----- Static properties -----
    message: (0, _emberComputed['default'])('user', function () {
      var user = this.get('user');
      if (user.get('online')) {
        return "online";
      }

      return 'Был в сети ' + user.get('lastSeen.time');
    })

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define("ember-search-likes/pods/components/user-status-online/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rzX7Jnri", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"message\"]],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"condition\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/components/user-status-online/template.hbs" } });
});
define('ember-search-likes/pods/hello/controller', ['exports', 'ember-controller', 'ember-service/inject', 'ember-computed-template-string'], function (exports, _emberController, _emberServiceInject, _emberComputedTemplateString) {
  exports['default'] = _emberController['default'].extend({

    // ----- Services -----
    config: (0, _emberServiceInject['default'])(),
    vkAuthUrl: Ember.computed('config.vkAuthUrl', function () {
      return this.get('config.vkAuthUrl');
    })

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    // actions: {
    // }
  });
});
define('ember-search-likes/pods/hello/route', ['exports', 'ember-route', 'ember-simple-auth/mixins/unauthenticated-route-mixin', 'ember-service/inject', 'ember-concurrency', 'ember-search-likes/utils/get-params'], function (exports, _emberRoute, _emberSimpleAuthMixinsUnauthenticatedRouteMixin, _emberServiceInject, _emberConcurrency, _emberSearchLikesUtilsGetParams) {
  exports['default'] = _emberRoute['default'].extend(_emberSimpleAuthMixinsUnauthenticatedRouteMixin['default'], {

    // ----- Services -----
    session: (0, _emberServiceInject['default'])(),

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);

      if (window.location.href.indexOf("access_token") !== -1) {
        var accessTokenStartIndex = window.location.href.indexOf("access_token");
        var url = window.location.href.slice(accessTokenStartIndex);
        var listParams = (0, _emberSearchLikesUtilsGetParams.getParams)(url);
        this.get('attemptAuthTask').perform(listParams);
      }
    },

    // model () {
    //   /* jshint unused:false */
    //   const parentModel = this.modelFor('')
    //
    //   return RSVP.hash({
    //     /* jshint ignore:start */
    //     ...parentModel,
    //     /* jshint ignore:end */
    //   })
    // },

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----
    attemptAuthTask: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0(listParams) {
      var errors;
      return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            context$1$0.prev = 0;
            context$1$0.next = 3;
            return this.get('session').authenticate('authenticator:custom-vk-auth', listParams);

          case 3:
            context$1$0.next = 9;
            break;

          case 5:
            context$1$0.prev = 5;
            context$1$0.t0 = context$1$0['catch'](0);
            errors = context$1$0.t0 && context$1$0.t0.errors || context$1$0.t0 && [JSON.stringify(context$1$0.t0, null, 2)] || ["Unknown error"];

            this.set('errorsRaw', errors);

          case 9:
          case 'end':
            return context$1$0.stop();
        }
      }, callee$0$0, this, [[0, 5]]);
    })).drop()

  });
});
// ----- Actions -----
// actions: {
// }
define("ember-search-likes/pods/hello/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/EQzCuS+", "block": "{\"statements\":[[\"block\",[\"sec-tion\"],null,null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"page-hello-button\"],[\"dynamic-attr\",\"href\",[\"unknown\",[\"vkAuthUrl\"]],null],[\"flush-element\"],[\"text\",\"\\n      Авторизоваться\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-search-likes/pods/hello/template.hbs" } });
});
define('ember-search-likes/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-search-likes/router', ['exports', 'ember-search-likes/config/environment', 'ember-router'], function (exports, _emberSearchLikesConfigEnvironment, _emberRouter) {

  var router = _emberRouter['default'].extend({
    location: _emberSearchLikesConfigEnvironment['default'].locationType,
    rootURL: _emberSearchLikesConfigEnvironment['default'].rootURL
  });

  router.map(function () {
    this.route('hello');

    this.route('authenticated', { path: '/' }, function () {
      this.route('friends', function () {
        this.route('friend', { path: ':user_id' });
      });
    });
  });

  exports['default'] = router;
});
define('ember-search-likes/routes/application', ['exports', 'ember'], function (exports, _ember) {

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  exports['default'] = _ember['default'].Route.extend();
});
define('ember-search-likes/serializers/application', ['exports', 'ember-data/serializers/json', 'ember-string'], function (exports, _emberDataSerializersJson, _emberString) {
  exports['default'] = _emberDataSerializersJson['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    keyForAttribute: function keyForAttribute(attr) {
      return (0, _emberString.underscore)(attr);
    }

  });
});
// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----
define('ember-search-likes/serializers/user', ['exports', 'ember-search-likes/serializers/application'], function (exports, _emberSearchLikesSerializersApplication) {
  exports['default'] = _emberSearchLikesSerializersApplication['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    normalize: function normalize(primaryModelClass, payload, id, requestType) {
      if (payload['last_seen']) {
        payload['last_seen_platform'] = payload.last_seen.platform;
        payload['last_seen_time'] = payload.last_seen.time;
        delete payload['last_seen'];
      }

      return this._super.apply(this, arguments);
    }

  });
});
// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define('ember-search-likes/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ember-search-likes/services/config', ['exports', 'ember-service', 'ember-search-likes/config/environment', 'ember-computed-template-string', 'ember-computed'], function (exports, _emberService, _emberSearchLikesConfigEnvironment, _emberComputedTemplateString, _emberComputed) {
  var ENV = _emberSearchLikesConfigEnvironment['default'].SystemENV;
  exports['default'] = _emberService['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----
    vkApiMethodUrl: 'https://api.vk.com/method/',
    vkBaseAuthUrl: 'https://oauth.vk.com/authorize?',
    vkAuthUrl: Ember.computed('vkBaseAuthUrl', 'vkAppId', 'display', 'redirectUri', 'vkScope', 'vkApiVersion', function () {
      return this.get('vkBaseAuthUrl') + 'client_id=' + this.get('vkAppId') + '&display=' + this.get('display') + '&redirect_uri=' + this.get('redirectUri') + '&scope=' + this.get('vkScope') + '&response_type=token&v=' + this.get('vkApiVersion');
    }),
    display: 'popup',
    redirectUri: _emberSearchLikesConfigEnvironment['default']['vk-settings'].redirectUri,
    vkApiVersion: 5.62,
    vkAppId: 5922511,
    vkScope: 'friends'

  });
});
// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----
define('ember-search-likes/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('ember-search-likes/services/moment', ['exports', 'ember', 'ember-search-likes/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _emberSearchLikesConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_emberSearchLikesConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('ember-search-likes/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('ember-search-likes/services/vk-service', ['exports', 'ember-service', 'ember-service/inject', 'npm:lodash'], function (exports, _emberService, _emberServiceInject, _npmLodash) {
  // import computed from 'ember-computed'
  // import Environment   from 'ember-search-likes/config/environment'

  exports['default'] = _emberService['default'].extend({

    // ----- Services -----
    session: (0, _emberServiceInject['default'])(),
    config: (0, _emberServiceInject['default'])(),
    ajax: (0, _emberServiceInject['default'])(),

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----

    // ----- Custom Methods -----
    /*
    * users.get принимает три параметра:
     * user_ids
     * fields
     * name_case
    *
    * */
    getUsers: function getUsers(params) {
      var url = this._buildUrl('users.get', params);

      return this.get('ajax').request(url, {
        dataType: "jsonp"
      });
    },

    getFriends: function getFriends(params) {
      var url = this._buildUrl('friends.get', params);

      return this.get('ajax').request(url, {
        dataType: "jsonp"
      });
    },

    _buildUrl: function _buildUrl(methodName, params) {
      var vkApiMethodUrl = this.get('config.vkApiMethodUrl');

      var keys = Object.keys(params);
      var query = keys.map(function (key) {
        if (_npmLodash['default'].isArray(params[key])) {
          return key + '=' + params[key].join(',');
        } else {
          return key + '=' + params[key];
        }
      });

      var version = this.get('config.vkApiVersion');
      var accessToken = this.get('session.data.authenticated.access_token');
      var queryes = query.join('&') + ('&v=' + version + '&access_token=' + accessToken);

      var baseUrl = vkApiMethodUrl + methodName;

      return baseUrl + '?' + queryes;
    }

    // ----- Events and observers -----

    // ----- Tasks -----

  });
});

// import RSVP    from 'rsvp'
define('ember-search-likes/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("ember-search-likes/utils/get-params", ["exports"], function (exports) {
  exports.getParams = getParams;

  function getParams(url) {
    var listParams = {};

    url.replace(/([^=&]+)=([^&]*)/gi, function (m, key, value) {
      return listParams[key] = value;
    });

    return listParams;
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ember-search-likes/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-search-likes';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ember-search-likes/app")["default"].create({"name":"ember-search-likes","version":"0.0.0+b7263548"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-search-likes.map
