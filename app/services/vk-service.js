import Service from 'ember-service'
import service from 'ember-service/inject'
import RSVP    from 'rsvp'
import _       from 'npm:lodash'
import computed from 'ember-computed'



export default Service.extend({

  // ----- Services -----
  session: service(),
  store:   service(),

  // ----- Overridden properties -----



  // ----- Static properties -----
  authStatuses: computed(function () {
    return {
      'connected':      'ok',
      'not_authorized': 'not allowed',
      'unknown':        'user has now auth'
    }
  }),


  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  authenticate () {
    return new RSVP.Promise((resolve, reject) => {
      VK.Auth.login(({session, status}) => {
        if (_.isEmpty(session)) {
          return reject('something went wrong')
        }
        const store = this.get('store');
        store.pushPayload('user', {
          user: session.user
        })
        this.get('session').setProperties({data: session})
        return resolve(this.get('authStatuses')[status])
      })
    })
  },

  getFriends () {
    return new RSVP.Promise((resolve) => {
      VK.Api.call(
        'friends.get',
        {
          user_id:   this.get('session.user.id'),
          order:     'random',
          fields:    'city,domain,last_seen,online',
          name_case: 'nom'
        },
        response => {
          debugger
        }
      )
    })
  }


  // ----- Events and observers -----



  // ----- Tasks -----

})
