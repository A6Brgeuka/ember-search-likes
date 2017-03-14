import Route from 'ember-route'
import RSVP from 'rsvp'



export default Route.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  model ({user_id}) {
    const parentModel = this.modelFor('authenticated.friends')

    const selectedUser = parentModel.friends.findBy('id', user_id)

    return RSVP.hash({
      ...parentModel,
      selectedUser
    })
  },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
