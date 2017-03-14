import Route from 'ember-route'
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin'
import service    from 'ember-service/inject'
import {task} from 'ember-concurrency'
import {getParams} from 'ember-search-likes/utils/get-params'


export default Route.extend(UnauthenticatedRouteMixin, {

  // ----- Services -----
  session: service(),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  beforeModel () {
    this._super(...arguments)

    if (window.location.href.indexOf("access_token") !== -1) {
      const accessTokenStartIndex = window.location.href.indexOf("access_token")
      const url = window.location.href.slice(accessTokenStartIndex)
      const listParams = getParams(url)
      this.get('attemptAuthTask').perform(listParams)
    }
  },

  // model () {
  //   /* jshint unused:false */
  //   const parentModel = this.modelFor('')
  //
  //   return RSVP.hash({
  //     /* jshint ignore:start */
  //     ...parentModel,
  //     /* jshint ignore:end */
  //   })
  // },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
  attemptAuthTask:
    task(
      function * (listParams) {
        try {
          yield this
            .get('session')
            .authenticate('authenticator:custom-vk-auth', listParams)
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
