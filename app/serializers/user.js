import ApplicationSerializer from './application'
import {underscore} from 'ember-string'
// import _ from 'npm:lodash'
// import service from 'ember-service/inject'
// import {reads} from 'ember-computed'
import {typeOf} from 'ember-utils'



export default ApplicationSerializer.extend({

  // ----- Services -----



  // ----- Overridden properties -----
  // attrs: {
  //   id: 'uid',
  // },


  // ----- Static properties -----



  // ----- Computed properties -----



  // ----- Overridden Methods -----
  // serializeAttribute (snapshot, json, key, attributes) {
  //   debugger
  //   json.attributes = json.attributes || {};
  //   this._super(snapshot, json.attributes, key, attributes);
  // },

  keyForAttribute (attr) {
    return underscore(attr);
  },

  normalize (modelClass, resourceHash) {
    let data = null;

    if (resourceHash) {
      this.normalizeUsingDeclaredMapping(modelClass, resourceHash);
      if (typeOf(resourceHash.links) === 'object') {
        this.normalizeUsingDeclaredMapping(modelClass, resourceHash.links);
      }

      data = {
        id:            resourceHash['uid'] || resourceHash['id'],
        type:          modelClass.modelName,
        attributes:    this.extractAttributes(modelClass, resourceHash),
        relationships: this.extractRelationships(modelClass, resourceHash)
      };

      this.applyTransforms(modelClass, data.attributes);
    }

    return { data };
  },
  // single record
  // normalize (store, primaryModelClass, payload, id, requestType) {
  //   const user = payload
  // },

  // many records
  // normalizeResponse (store, primaryModelClass, payload, id, requestType) {
  //   debugger
  //   const users = {
  //     data: _.map(payload, user => {
  //       return {
  //         id: user.uid,
  //         type: 'user',
  //         attributes: {
  //           firstName: user.first_name,
  //           lastName:  user.last_name
  //         },
  //         // relationships: {
  //         //   user: {data: {id: this.get('user.id'), type: 'user'}},
  //         // }
  //       }
  //     })
  //   }
  //   return this._super(store, primaryModelClass, users, id, requestType)
  // },

  // normalizeSingleResponse (store, primaryModelClass, payload, id) {
  //   debugger
  //   const user = {
  //     data: {
  //       id:   id,
  //       type: 'user',
  //       attributes: {
  //         first_name: payload.first_name,
  //         last_name:  payload.last_name
  //       },
  //     }
  //   }
  //
  //   return this._super(store, primaryModelClass, user, id)
  // },



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----



  // ----- Actions -----
  // actions: {
  // }
})
