import JSONSerializer from 'ember-data/serializers/json'
import {underscore} from 'ember-string'

export default JSONSerializer.extend({

  // ----- Services -----



  // ----- Overridden properties -----




  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  keyForAttribute (attr) {
    return underscore(attr)
  },


  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
})
