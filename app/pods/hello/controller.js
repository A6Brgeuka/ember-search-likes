import Controller from 'ember-controller'
import {task} from 'ember-concurrency'
import service    from 'ember-service/inject'



export default Controller.extend({

  // ----- Services -----
  session: service(),



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
  attemptAuthTask:
    task(
      function * () {
        try {
          yield this
            .get('session')
            .authenticate('authenticator:custom-vk-auth')
        } catch (e) {
          const errors = e && e.errors || e && [JSON.stringify(e, null, 2)] || ["Unknown error"]
          this.set('errorsRaw', errors)
        }
      }
    ).drop(),


  // ----- Actions -----
  // actions: {
  // }
})
