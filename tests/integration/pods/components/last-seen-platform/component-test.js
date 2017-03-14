import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('last-seen-platform', 'Integration | Component | last seen platform', {
  integration: true
})

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{last-seen-platform}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#last-seen-platform}}
      template block text
    {{/last-seen-platform}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
