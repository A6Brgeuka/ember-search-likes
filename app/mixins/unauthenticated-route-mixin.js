import Mixin from 'ember-metal/mixin'
import config   from 'ember-search-likes/config/environment'
import computed from 'ember-computed'
import service from 'ember-service/inject'




export default Mixin.create({

  // ----- Services -----
  session: service(),



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  routeIfAlreadyAuthenticated: computed(function () {
    return config['auth-routes'].routeIfAlreadyAuthenticated
  }),


  // ----- Overridden Methods -----
  beforeModel () {
    if (this.get('session.isAuthenticated')) {
      const routeIfAlreadyAuthenticated = this.get('routeIfAlreadyAuthenticated')
      this.transitionTo(routeIfAlreadyAuthenticated)
    } else {
      this._super(...arguments)
    }
  }



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
