import Service from 'ember-service'
import computed, {reads} from 'ember-computed'
import _ from 'npm:lodash'



export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----


  // ----- Computed properties -----
  isAuthenticated: computed('data', function () {
    return !_.isEmpty(this.get('data'))
  }),

  data: computed(function () {
    return {}
  }),

  user: reads('data.user')


  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----

})
