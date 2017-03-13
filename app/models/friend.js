// import Model from 'ember-data/model'
import baseUserModel from './base-user'
import {hasMany, belongsTo}  from 'ember-data/relationships'
import attr       from 'ember-data/attr'



export default baseUserModel.extend({

  // ----- Attributes -----
  lastSeen: attr(),
  online:   attr(),
  photo_50:  attr(),
  photo_100:  attr(),
  photo_200:  attr(),



  // ----- Relationships -----
  user:    belongsTo('user',   {async: false}),



  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
})
