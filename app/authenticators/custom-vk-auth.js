import Base from 'ember-simple-auth/authenticators/base'
import RSVP from 'rsvp'


export default Base.extend({

  // ----- Services -----


  // ----- Overridden Methods -----
  restore (data) {
    return RSVP.resolve(data)
  },

  authenticate (args) {
    debugger
    return RSVP.resolve(args)
  },
})
