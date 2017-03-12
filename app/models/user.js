// import Model from 'ember-data/model'
// import attr       from 'ember-data/attr'
import {hasMany, belongsTo}  from 'ember-data/relationships'
import baseUserModel from './base-user'


export default baseUserModel.extend({

  // ----- Attributes -----



  // ----- Relationships -----
  friends: hasMany  ('friend', {async: false, inverse: null}),


  // ----- Overridden properties -----



  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----
})
