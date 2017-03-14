import Component from 'ember-component'
import computed from 'ember-computed'



export default Component.extend({

  // ----- Arguments -----
  user: undefined,


  // ----- Services -----



  // ----- Overridden properties -----
  classNames: ['userStatusOnline'],



  // ----- Static properties -----
  message: computed('user', function () {
    const user = this.get('user')
    if (user.get('online')) {
      return "online"
    }

    return `Был в сети ${user.get('lastSeen.time')}`
  })


  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
