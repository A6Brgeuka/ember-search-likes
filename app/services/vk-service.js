import Service from 'ember-service'
import service from 'ember-service/inject'
import RSVP    from 'rsvp'



export default Service.extend({

  // ----- Services -----
  session: service(),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  authenticate () {
    return new RSVP.Promise((resolve) => {
      VK.Auth.login(({session, status}) => {
        this.get('session').setProperties({data: session})
        return resolve()
      })
    })
  }


  // ----- Events and observers -----



  // ----- Tasks -----

})
