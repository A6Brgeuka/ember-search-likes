import config from './config/environment'

import Router from 'ember-router'

const router = Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
})

router.map(function () {
})

export default router
