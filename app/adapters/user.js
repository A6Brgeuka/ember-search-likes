import ApplicationAdapter from './application'
import service    from 'ember-service/inject'



export default ApplicationAdapter.extend({

  // ----- Services -----
  vkService: service(),
  session:   service(),

  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  // findRecord (store, type, id, snapshot) {
  //   return this.get('vkService').getUser([id])
  //     .then(u => {
  //       debugger
  //       return u[0]
  //     })
  // },



  // ----- Custom Methods -----
  getCurrentUser () {
    const store = this.get('store')
    const user  = this.get('session.data.authenticated.user')
    const modelClass = store.modelFor('user')
    const serializer = store.serializerFor('user')
    return serializer.normalizeSingleResponse(store, modelClass, user, user.id)
  },

  findFriends () {
    debugger
  }

  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
