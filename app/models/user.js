import Model from 'ember-data/model'
import attr       from 'ember-data/attr'
import {hasMany}  from 'ember-data/relationships'



export default Model.extend({

  // ----- Attributes -----
  domain:    attr('string'),
  firstName: attr('string'),
  lastName:  attr('string'),
  href:      attr('string'),
  nickName:  attr('string'),


  // ----- Relationships -----
  friends: hasMany('user', {async: false, inverse: null}),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
})
