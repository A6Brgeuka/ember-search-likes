import Environment from 'ember-search-likes/config/environment'

export function initialize (/* application */) {
  if (VK) {
    VK.init({
      apiId: Environment['vk-settings']['appId']
    })
  } else {
    throw new Error('VK is not defined')
  }
}

export default {
  name: 'social-init',
  initialize
}
