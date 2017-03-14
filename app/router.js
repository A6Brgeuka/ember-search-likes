import config from './config/environment'

import Router from 'ember-router'

const router = Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
})

router.map(function () {
  this.route('hello')

  this.route('authenticated', {path: '/'}, function () {
    this.route('friends', function() {
      this.route('friend', {path: ':user_id'})
    })
  })
})

export default router
