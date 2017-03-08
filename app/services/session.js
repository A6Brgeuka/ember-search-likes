import Service from 'ember-service'
import computed, {reads} from 'ember-computed'
import _ from 'npm:lodash'
import service from 'ember-service/inject'



export default Service.extend({

  // ----- Services -----
  localStorage: service(),


  // ----- Overridden properties -----



  // ----- Static properties -----


  // ----- Computed properties -----
  isAuthenticated: computed('data', function () {
    return !_.isEmpty(this.get('localStorage').restore())
  }),


  data: computed({
    set (key, value) {

    },
    get () {

    }
  })


  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----

})
