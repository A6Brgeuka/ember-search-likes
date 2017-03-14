import Service from 'ember-service'
import Environment from 'ember-search-likes/config/environment'
const ENV = Environment.SystemENV
import templateString from 'ember-computed-template-string'
import computed from 'ember-computed'
console.log(Environment)

export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  vkApiMethodUrl: 'https://api.vk.com/method/',
  vkBaseAuthUrl:  'https://oauth.vk.com/authorize?',
  vkAuthUrl: templateString(
    "${vkBaseAuthUrl}client_id=${vkAppId}&display=${display}&redirect_uri=${redirectUri}&scope=${vkScope}&response_type=token&v=${vkApiVersion}"
  ),

  display:      'popup',
  redirectUri:  computed(function () {
    console.log("redirectUri");
    console.log(Environment)
    return ENV.ESL_GH_PAGES ? 'https://a6brgeuka.github.io/ember-search-likes/hello' : 'http://localhost:4200/hello'
  }),
  vkApiVersion: 5.62,
  vkAppId:      5922511,
  vkScope:      'friends',



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----

})
