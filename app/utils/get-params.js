export function getParams (url) {
  const listParams = {}

  url.replace(/([^=&]+)=([^&]*)/gi, (m, key, value) => {
    return listParams[key] = value
  })

  return listParams
}
