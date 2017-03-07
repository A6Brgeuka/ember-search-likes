import Route from 'ember-route'
import AuthenticatedRouteMixin from 'ember-search-likes/mixins/authenticated-route-mixin'



export default Route.extend(AuthenticatedRouteMixin, {

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  // model() {
  //  should load friends
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
  // actions: {
  // }
})
