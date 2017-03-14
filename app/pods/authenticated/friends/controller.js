import Controller from 'ember-controller'
import computed, {reads, filterBy} from 'ember-computed'
import {conditional, and, not, equal} from 'ember-awesome-macros'
import searchArrayByProp from 'ember-search-likes/macros/search-array-by-prop'



export default Controller.extend({

  // ----- Services -----



  // ----- Overridden properties -----
  queryParams: [
    {'searchInput': 'search'}
  ],


  // ----- Static properties -----
  off: 'off',
  on:  'on',

  searchInput: '',
  isMale:      'off',
  isFemale:    'off',


  // ----- Computed properties -----
  users:       reads('model.friends'),
  maleUsers:   filterBy('users', 'sex', 2),
  femaleUsers: filterBy('users', 'sex', 1),


  isAll: and(equal('isMale', 'off'), equal('isFemale', 'off')),

  maleOrFemaleOrAllUsers: conditional(
    'isAll',
    'users',
    conditional(
      equal('isMale', 'on'),
      'maleUsers',
      conditional(
        equal('isFemale', 'on'),
        'femaleUsers',
        'users'
      )
    ),
  ),

  usersFiltered: searchArrayByProp('maleOrFemaleOrAllUsers', 'name', 'searchInput'),



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  actions: {
    toggleMale (obj) {
      if (obj.newValue === 'on') {
        this.set('isMale', 'on')
        this.set('isFemale', 'off')
      } else {
        this.set('isMale', 'off')
      }
    },

    toggleFemale (obj) {
      if (obj.newValue === 'on') {
        this.set('isFemale', 'on')
        this.set('isMale', 'off')
      } else {
        this.set('isFemale', 'off')
      }
    }
  }
})
