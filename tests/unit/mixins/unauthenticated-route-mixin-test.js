import Ember from 'ember'
import UnauthenticatedRouteMixinMixin from 'ember-search-likes/mixins/unauthenticated-route-mixin'
import {module, test} from 'qunit'

module('Unit | Mixin | unauthenticated route mixin')

// Replace this with your real tests.
test('it works', function (assert) {
  let UnauthenticatedRouteMixinObject = Ember.Object.extend(UnauthenticatedRouteMixinMixin)
  let subject = UnauthenticatedRouteMixinObject.create()
  assert.ok(subject)
})
