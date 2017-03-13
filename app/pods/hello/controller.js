import Controller from 'ember-controller'
import service    from 'ember-service/inject'
import templateString from 'ember-computed-template-string'




export default Controller.extend({

  // ----- Services -----
  config:    service(),
  vkAuthUrl: templateString('${config.vkAuthUrl}')


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
