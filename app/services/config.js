import Service from 'ember-service'
import Environment from 'ember-search-likes/config/environment'
// const ENV = Environment.SystemENV
import templateString from 'ember-computed-template-string'



export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  vkApiMethodUrl: 'https://api.vk.com/method/',
  vkApiAuthUrl:   templateString(
    'https://oauth.vk.com/authorize?client_id${vkAppId}&display=page&redirect_uri=https://oauth.vk.com/blank.html&'
  ),
  vkApiVersion:   Environment['vk-settings'].version,
  vkAppId:        Environment['vk-settings'].appId,
  vkScope:        Environment['vk-settings'].scope,



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----

})
