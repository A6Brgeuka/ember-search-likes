import Route from 'ember-route'
import UnauthenticatedRouteMixin from 'ember-search-likes/mixins/unauthenticated-route-mixin'
import service from 'ember-service/inject'



export default Route.extend(UnauthenticatedRouteMixin, {

  // ----- Services -----
  vkService: service(),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  // model() {
  //   /* jshint unused:false */
  //   const parentModel = this.modelFor('')
  //
  //   return RSVP.hash({
  //     /* jshint ignore:start */
  //     ...parentModel,
  //     /* jshint ignore:end */
  //   })
  // },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    login () {
      this.get('vkService')
        .authenticate()
        .then(() => this.transitionTo('authenticated.friends'))
        .catch(err => this.set('errorMessage', err))
    }
  }
})
