// import Model from 'ember-data/model'
import baseUserModel from './base-user'


export default baseUserModel.extend({

  // ----- Attributes -----



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
