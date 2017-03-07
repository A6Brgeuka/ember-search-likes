import Mixin    from 'ember-metal/mixin'
import config   from 'ember-search-likes/config/environment'
import computed from 'ember-computed'
import service from 'ember-service/inject'




export default Mixin.create({

  // ----- Services -----
  session: service(),



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  authenticationRoute: computed(function () {
    return config['auth-routes'].authenticationRoute
  }),



  // ----- Overridden Methods -----
  beforeModel () {
    if (!this.get('session.isAuthenticated')) {
      const authenticationRoute = this.get('authenticationRoute')
      this.transitionTo(authenticationRoute)
    } else {
      return this._super(...arguments)
    }
  }



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
