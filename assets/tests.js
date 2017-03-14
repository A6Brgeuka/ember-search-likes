'use strict';

define('ember-search-likes/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/adapters/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/user.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/authenticators/custom-vk-auth.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - authenticators/custom-vk-auth.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/custom-vk-auth.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/helpers/destroy-app', ['exports', 'ember-runloop'], function (exports, _emberRunloop) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    (0, _emberRunloop['default'])(application, 'destroy');
  }
});
define('ember-search-likes/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
/* global wait */
define('ember-search-likes/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-search-likes/tests/helpers/start-app', 'ember-search-likes/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberSearchLikesTestsHelpersStartApp, _emberSearchLikesTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberSearchLikesTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberSearchLikesTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-search-likes/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/helpers/resolver', ['exports', 'ember-search-likes/resolver', 'ember-search-likes/config/environment'], function (exports, _emberSearchLikesResolver, _emberSearchLikesConfigEnvironment) {

  var resolver = _emberSearchLikesResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberSearchLikesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberSearchLikesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-search-likes/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/helpers/start-app', ['exports', 'ember-runloop', 'ember-platform', 'ember-search-likes/app', 'ember-search-likes/config/environment'], function (exports, _emberRunloop, _emberPlatform, _emberSearchLikesApp, _emberSearchLikesConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = (0, _emberPlatform.assign)({}, _emberSearchLikesConfigEnvironment['default'].APP);
    attributes = (0, _emberPlatform.assign)(attributes, attrs); // use defaults, but you can override

    (0, _emberRunloop['default'])(function () {
      application = _emberSearchLikesApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-search-likes/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/integration/pods/components/friends-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('friends-list', 'Integration | Component | friends list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'SPvY3mDM',
      'block': '{"statements":[["append",["unknown",["friends-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'V6VF56Gd',
      'block': '{"statements":[["text","\\n"],["block",["friends-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-search-likes/tests/integration/pods/components/friends-list/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/pods/components/friends-list/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/friends-list/component-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/integration/pods/components/last-seen-platform/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('last-seen-platform', 'Integration | Component | last seen platform', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'jct/9OF0',
      'block': '{"statements":[["append",["unknown",["last-seen-platform"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'yqU62qvC',
      'block': '{"statements":[["text","\\n"],["block",["last-seen-platform"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-search-likes/tests/integration/pods/components/last-seen-platform/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/pods/components/last-seen-platform/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/last-seen-platform/component-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/integration/pods/components/sec-tion/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('sec-tion', 'Integration | Component | sec tion', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'T/XZ+Gp+',
      'block': '{"statements":[["append",["unknown",["sec-tion"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '8lomdLNf',
      'block': '{"statements":[["text","\\n"],["block",["sec-tion"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-search-likes/tests/integration/pods/components/sec-tion/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/pods/components/sec-tion/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/sec-tion/component-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/integration/pods/components/user-card/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('user-card', 'Integration | Component | user card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'WPWngb3C',
      'block': '{"statements":[["append",["unknown",["user-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'X2UPIis3',
      'block': '{"statements":[["text","\\n"],["block",["user-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-search-likes/tests/integration/pods/components/user-card/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/pods/components/user-card/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/user-card/component-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/integration/pods/components/user-status-online/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('user-status-online', 'Integration | Component | user status online', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'nEUG9iEw',
      'block': '{"statements":[["append",["unknown",["user-status-online"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'EtAyz0wG',
      'block': '{"statements":[["text","\\n"],["block",["user-status-online"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-search-likes/tests/integration/pods/components/user-status-online/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/pods/components/user-status-online/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/user-status-online/component-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/macros/search-array-by-prop.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - macros/search-array-by-prop.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'macros/search-array-by-prop.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/application/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/application/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/controller.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/application/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/application/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/authenticated/friends/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/friends/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/authenticated/friends/controller.js should pass ESLint.\n2:8  - \'computed\' is defined but never used. (no-unused-vars)\n2:19  - \'reads\' is defined but never used. (no-unused-vars)\n2:26  - \'filterBy\' is defined but never used. (no-unused-vars)\n3:9  - \'conditional\' is defined but never used. (no-unused-vars)\n3:22  - \'and\' is defined but never used. (no-unused-vars)\n3:27  - \'not\' is defined but never used. (no-unused-vars)\n3:32  - \'equal\' is defined but never used. (no-unused-vars)\n4:8  - \'searchArrayByProp\' is defined but never used. (no-unused-vars)');
  });
});
define('ember-search-likes/tests/pods/authenticated/friends/friend/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/friends/friend/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/authenticated/friends/friend/route.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/authenticated/friends/index/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/friends/index/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/authenticated/friends/index/controller.js should pass ESLint.\n49:3  - Parsing error: Unexpected token ) (null)');
  });
});
define('ember-search-likes/tests/pods/authenticated/friends/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/friends/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/authenticated/friends/index/route.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/authenticated/friends/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/friends/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/authenticated/friends/route.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/authenticated/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/authenticated/index/route.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/authenticated/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/authenticated/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/authenticated/route.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/components/friends-list/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/friends-list/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/friends-list/component.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/components/last-seen-platform/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/last-seen-platform/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/last-seen-platform/component.js should pass ESLint.\n26:39  - Infix operators must be spaced. (space-infix-ops)');
  });
});
define('ember-search-likes/tests/pods/components/sec-tion/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/sec-tion/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/sec-tion/component.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/components/user-card/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/user-card/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/user-card/component.js should pass ESLint.\n17:1  - Trailing spaces not allowed. (no-trailing-spaces)');
  });
});
define('ember-search-likes/tests/pods/components/user-status-online/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/components/user-status-online/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/user-status-online/component.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/hello/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/hello/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/hello/controller.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/pods/hello/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pods/hello/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/hello/route.js should pass ESLint.\n68:28  - Unexpected mix of \'&&\' and \'||\'. (no-mixed-operators)\n68:40  - Unexpected mix of \'&&\' and \'||\'. (no-mixed-operators)\n68:40  - Unexpected mix of \'||\' and \'&&\'. (no-mixed-operators)\n68:45  - Unexpected mix of \'||\' and \'&&\'. (no-mixed-operators)');
  });
});
define('ember-search-likes/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint.\n14:35  - Missing space before function parentheses. (space-before-function-paren)');
  });
});
define('ember-search-likes/tests/serializers/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/serializers/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/user.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/services/config.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/config.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/config.js should pass ESLint.\n3:7  - \'ENV\' is assigned a value but never used. (no-unused-vars)\n5:8  - \'computed\' is defined but never used. (no-unused-vars)');
  });
});
define('ember-search-likes/tests/services/vk-service.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/vk-service.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/vk-service.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/test-helper', ['exports', 'ember-search-likes/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberSearchLikesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberSearchLikesTestsHelpersResolver['default']);
});
define('ember-search-likes/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-search-likes/tests/unit/adapters/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/adapters/friend-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:friend', 'Unit | Adapter | friend', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-search-likes/tests/unit/adapters/friend-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/friend-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/friend-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/adapters/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:user', 'Unit | Adapter | user', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-search-likes/tests/unit/adapters/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/initializers/social-init-test', ['exports', 'ember', 'ember-search-likes/initializers/social-init', 'qunit', 'ember-search-likes/tests/helpers/destroy-app'], function (exports, _ember, _emberSearchLikesInitializersSocialInit, _qunit, _emberSearchLikesTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Initializer | social init', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _emberSearchLikesTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _emberSearchLikesInitializersSocialInit.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('ember-search-likes/tests/unit/initializers/social-init-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/initializers/social-init-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/social-init-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/models/base-user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('base-user', 'Unit | Model | base user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store()
    assert.ok(!!model);
  });
});
define('ember-search-likes/tests/unit/models/base-user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/base-user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/base-user-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/models/friend-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('friend', 'Unit | Model | friend', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store()
    assert.ok(!!model);
  });
});
define('ember-search-likes/tests/unit/models/friend-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/friend-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/friend-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store()
    assert.ok(!!model);
  });
});
define('ember-search-likes/tests/unit/models/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/application/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-search-likes/tests/unit/pods/application/controller-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/application/controller-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/controller-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/application/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/application/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/application/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:authenticated/friends', 'Unit | Controller | authenticated/friends', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/controller-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/friends/controller-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/friends/controller-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/friend/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:authenticated/friends/friend', 'Unit | Route | authenticated/friends/friend', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/friend/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/friends/friend/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/friends/friend/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/index/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:authenticated/friends/index', 'Unit | Controller | authenticated/friends/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/index/controller-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/friends/index/controller-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/friends/index/controller-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:authenticated/friends/index', 'Unit | Route | authenticated/friends/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/index/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/friends/index/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/friends/index/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:authenticated/friends', 'Unit | Route | authenticated/friends', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/friends/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/friends/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/friends/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:authenticated/index', 'Unit | Route | authenticated/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/index/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/index/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/index/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:authenticated', 'Unit | Route | authenticated', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/authenticated/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/authenticated/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/authenticated/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/hello/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:hello', 'Unit | Controller | hello', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-search-likes/tests/unit/pods/hello/controller-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/hello/controller-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/hello/controller-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/pods/hello/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-search-likes/tests/unit/pods/hello/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/pods/hello/route-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/hello/route-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-search-likes/tests/unit/serializers/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/serializers/friend-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('friend', 'Unit | Serializer | friend', {
    // Specify the other units that are required for this test.
    needs: ['serializer:friend']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-search-likes/tests/unit/serializers/friend-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/friend-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/friend-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/serializers/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Serializer | user', {
    // Specify the other units that are required for this test.
    needs: ['serializer:user']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-search-likes/tests/unit/serializers/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/user-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/services/config-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:config', 'Unit | Service | config', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-search-likes/tests/unit/services/config-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/config-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/config-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/unit/services/vk-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:vk-service', 'Unit | Service | vk service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-search-likes/tests/unit/services/vk-service-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/vk-service-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/vk-service-test.js should pass ESLint.\n');
  });
});
define('ember-search-likes/tests/utils/get-params.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - utils/get-params.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/get-params.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('ember-search-likes/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
