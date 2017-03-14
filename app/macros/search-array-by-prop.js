import computed from 'ember-computed'
import get from 'ember-metal/get'

export default function searchArrayByProp (searchableArray, propName, searchInput) {

  return computed(`${searchableArray}.@each.${propName}`, searchInput, function () {
    const array = this.get(searchableArray)
    const input = (this.get(searchInput) || '').toLowerCase()

    if (input === '') return array

    return array.filter(item => get(item, propName).toLowerCase().indexOf(input) > -1)
  })

}
