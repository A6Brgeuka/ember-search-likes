import Base    from 'ember-simple-auth/authenticators/base'
import service from 'ember-service/inject'



export default Base.extend({

  // ----- Services -----
  vkService: service(),


  // ----- Overridden Methods -----
  restore (/*data*/) {
    return this.get('vkService').getSession()
  },

  authenticate (/*args*/) {
    return this.get('vkService').login()
  },
});
