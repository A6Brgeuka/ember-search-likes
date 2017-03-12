import Route from 'ember-route'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
import service    from 'ember-service/inject'
import RSVP from 'rsvp'



export default Route.extend(AuthenticatedRouteMixin, {

  // ----- Services -----
  session: service(),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  model (params, transition) {
    const store = this.get('store')

    return RSVP
      .hash({
        currentUser: this._fetchUserOrLogout(transition)
      })
      // .then(a => {
      //   debugger
      // })

      // .then(model => RSVP.hash({
      //   ...model,

        // friends: store.findFriends('user')
      // }))

      // .then(model => {
      //   if (!model.friends.get('length')) throw new Error('no_friends')
      //   return model
      // })
  },

  beforeModel () {
    this.transitionTo('authenticated.friends')
  },



  // ----- Custom Methods -----
  _fetchUserOrLogout (transition) {
    const userId = this.get('session.data.authenticated.user.id')

    if (!userId) {
      transition.abort()
      this.get('session').invalidate()
      return
    }

    return this
      .get('store')
      .adapterFor('user')
      .getCurrentUser()
      // .catch(e => {
      //
      //   // Logout if user isn't found or doesn't match the one stored in session
      //   if (
      //     e.errors
      //     && e.errors[0]
      //     && _.includes(['404', 404], e.errors[0].status)
      //   ) {
      //     transition.abort()
      //     // this.get('session').invalidate() // can't use this.send('logout') here
      //     return
      //   }
      //
      //   // On any other error, propagate the error
      //   throw e
      // })
  },


  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
