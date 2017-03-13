import ApplicationAdapter from './application'
import service from 'ember-service/inject'
// import RSVP    from 'rsvp'



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
  getCurrentUser (params) {
    return this.get('vkService')
      .getUsers (params)
      .then(({response: [user]}) => {
        const store = this.get('store')
        const modelClass = store.modelFor('user')
        const serializer = store.serializerFor('user')
        const normalized = serializer.normalize(modelClass, user, user.id, 'findRecord')
        return store.push(normalized)
      })
  },

  getFriends (params) {
    return this.get('vkService')
      .getFriends(params)
      .then(({response: {count, items}}) => {
        const store = this.get('store')
        const modelClass = store.modelFor('user')
        const serializer = store.serializerFor('user')
        const normalized = serializer.normalizeResponse(store, modelClass, items, null, 'findAll')
        return store.push(normalized)
      })
  }

  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
