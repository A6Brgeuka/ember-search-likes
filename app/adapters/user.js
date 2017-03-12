import ApplicationAdapter from './application'
import service    from 'ember-service/inject'



export default ApplicationAdapter.extend({

  // ----- Services -----
  vkService: service(),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  findRecord (store, type, id, snapshot) {
    return this.get('vkService').getUser([id])
  },



  // ----- Custom Methods -----


  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
