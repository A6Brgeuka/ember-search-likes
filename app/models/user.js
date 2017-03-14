import Model from 'ember-data/model'
import attr       from 'ember-data/attr'
// import {hasMany, belongsTo}  from 'ember-data/relationships'
import computed from 'ember-computed'


export default Model.extend({

  // ----- Attributes -----
  domain:    attr('string'),
  firstName: attr('string'),
  lastName:  attr('string'),
  nickName:  attr('string'),
  lastSeen:  attr(), //object {"time": 1489407773, "platform": 7},
  online:    attr('number'),
  photo_50:  attr('string'),
  photo_100: attr('string'),
  photo_200: attr('string'),
  sex:       attr('number'),


  // падежы
  // винительный
  first_name_acc: attr('string'),
  // ----- Relationships -----


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  name: computed('firstName', 'lastName', function () {
    const firstName = this.get('firstName')
    const lastName  = this.get('lastName')

    if (firstName && lastName) {
      return `${lastName}, ${firstName}`
    }

    return 'unknown'
  }),


  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
})
