import Component from 'ember-component'
import computed from 'ember-computed'


export default Component.extend({

  // ----- Arguments -----
  user: undefined,


  // ----- Services -----



  // ----- Overridden properties -----
  classNameBindings: [':lastSeenPlatform', 'platformClass'],



  // ----- Static properties -----



  // ----- Computed properties -----
  platformClass: computed('platform', function () {
    if (this.get('user.onlineMobile') ||this.get('user.lastSeenPlatform') !== 7) {
      return '_mobile'
    }
  })


  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
