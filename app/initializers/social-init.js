export function initialize (/* application */) {
  if (VK) {
    VK.init({
      apiId: 5480399
    })
  } else {
    throw new Error('VK is not defined')
  }
}

export default {
  name: 'social-init',
  initialize
}
