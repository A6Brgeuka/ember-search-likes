import Model from 'ember-data/model'
import attr       from 'ember-data/attr'
// import {hasMany, belongsTo}  from 'ember-data/relationships'
import computed from 'ember-computed'
import moment from 'moment'


export default Model.extend({

  // ----- Attributes -----
  domain:       attr('string'),
  firstName:    attr('string'),
  lastName:     attr('string'),
  nickName:     attr('string'),
  online:       attr('number'),
  onlineMobile: attr('number'),
  photo_50:     attr('string'),
  photo_100:    attr('string'),
  photo_200:    attr('string'),
  sex:          attr('number'),
  lastSeenTime:     attr(), //unix time: 1489407773
  lastSeenPlatform: attr('number'), //platform : 7


  // падежы
  // винительный
  firstNameAcc: attr('string'),
  // родительный
  firstNameGen: attr('string'),
  // ----- Relationships -----


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----
  onlineStatusText: computed('online', function () {
    if (this.get('online')) {
      return "Online"
    }
    const was = this.get('sex') === 1 ? "была" : "был"
    const timeAgo = this.get('timeAgo')

    return `${was} в сети ${timeAgo}`
  }),
  timeAgo: computed('lastSeenTime', function () {
    return moment.unix(this.get('lastSeenTime')).fromNow()
  }),

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
