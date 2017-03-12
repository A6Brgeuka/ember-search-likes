import Service from 'ember-service'
import service from 'ember-service/inject'
import RSVP    from 'rsvp'
import _       from 'npm:lodash'
import computed from 'ember-computed'
import config   from 'ember-search-likes/config/environment'




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
  VK: computed(function () {
    if (!VK) {
      throw new Error('VK is not defined')
    }
    return VK
  }),


  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  login () {
    return new RSVP.Promise((resolve, reject) => {
      this.get('VK').Auth.login(({session, status}) => {
        if (_.isEmpty(session)) {
          return reject('something went wrong')
        }
        return resolve(session)
      }, config['vk-settings'].scope)
    })
  },

  getSession () {
    return new RSVP.Promise((resolve, reject) => {
      this.get('VK').Auth.getLoginStatus(({session, status}) => {
        if (_.isEmpty(session)) {
          return reject('something went wrong')
        }
        return resolve(session)
      })
    })
  },

  // getProfileInfo () {
  //   debugger
  //   return new RSVP.Promise((resolve, reject) => {
  //     this.get('VK').Api.call('account.getProfileInfo', {}, res => {
  //       debugger
  //     })
  //   })
  // },

  getUser (userIds) {
    return new RSVP.Promise((resolve, reject) => {
      this.get('VK').Api.call(
        'users.get',
        {
          user_ids: userIds.join(',')
        },
        res => resolve(res.response)
      )
    })
  },

  getFriends () {
    return new RSVP.Promise((resolve) => {
      this.get('VK').Api.call(
        'friends.get',
        {
          user_id:   this.get('session.user.id'),
          order:     'random',
          fields:    'city,domain,last_seen,online',
          name_case: 'nom'
        },
        response => {
          resolve(response.response)
        }
      )
    })
  }


  // ----- Events and observers -----



  // ----- Tasks -----

})
