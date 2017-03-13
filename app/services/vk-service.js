import Service from 'ember-service'
import service from 'ember-service/inject'
// import RSVP    from 'rsvp'
import _       from 'npm:lodash'
// import computed from 'ember-computed'
// import Environment   from 'ember-search-likes/config/environment'




export default Service.extend({

  // ----- Services -----
  session: service(),
  config:  service(),
  ajax:    service(),



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----
  /*
  * users.get принимает три параметра:
   * user_ids
   * fields
   * name_case
  *
  * */
  getUsers (params) {
    const url = this._buildUrl('users.get', params)

    return this.get('ajax')
      .request(url, {
        dataType: "jsonp"
      })
  },

  getFriends (params) {
    const url = this._buildUrl('friends.get', params)

    return this.get('ajax')
      .request(url, {
        dataType: "jsonp"
      })
  },

  _buildUrl (methodName, params) {
    let vkApiMethodUrl = this.get('config.vkApiMethodUrl')

    const keys = Object.keys(params)
    const query = keys.map(key => {
      if (_.isArray(params[key])) {
        return `${key}=${params[key].join(',')}`
      } else {
        return `${key}=${params[key]}`
      }
    })

    const version     = this.get('config.vkApiVersion')
    const accessToken = this.get('session.data.authenticated.access_token')
    const queryes     = query.join('&') + `&v=${version}&access_token=${accessToken}`

    const baseUrl = vkApiMethodUrl + methodName

    return baseUrl + '?' + queryes
  }


  // ----- Events and observers -----



  // ----- Tasks -----

})
