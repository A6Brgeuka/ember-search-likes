import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('sec-tion', 'Integration | Component | sec tion', {
  integration: true
})

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sec-tion}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#sec-tion}}
      template block text
    {{/sec-tion}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
