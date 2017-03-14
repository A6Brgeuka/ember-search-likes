import ApplicationSerializer from './application'


export default ApplicationSerializer.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  normalize (primaryModelClass, payload, id, requestType) {
    if (payload['last_seen']) {
      payload['last_seen_platform'] = payload.last_seen.platform
      payload['last_seen_time']     = payload.last_seen.time
      delete payload['last_seen']
    }

    return this._super(...arguments)
  },


  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
