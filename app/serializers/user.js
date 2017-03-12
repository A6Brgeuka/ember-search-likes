import JSONAPISerializer from 'ember-data/serializers/json-api'
import {camelize} from 'ember-string'
import _ from 'npm:lodash'
import service from 'ember-service/inject'
import {reads} from 'ember-computed'



export default JSONAPISerializer.extend({

  session: service(),

  currentUser: reads('session.data.authenticated.user'),

  serializeAttribute (snapshot, json, key, attributes) {
    debugger
    json.attributes = json.attributes || {};
    this._super(snapshot, json.attributes, key, attributes);
  },

  keyForAttribute (attr) {
    debugger
    return camelize(attr);
  },
  // single record
  // normalize (store, primaryModelClass, payload, id, requestType) {
  //   const user = payload
  // },

  // many records
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    debugger
    const users = {
      data: _.map(payload, user => {
        return {
          id: user.uid,
          type: 'user',
          attributes: {
            firstName: user.first_name,
            lastName:  user.last_name
          },
          // relationships: {
          //   user: {data: {id: this.get('user.id'), type: 'user'}},
          // }
        }
      })
    }
    return this._super(store, primaryModelClass, users, id, requestType)
  },

  normalizeSingleResponse (store, primaryModelClass, payload, id) {
    debugger
    const user = {
      data: {
        id:   id,
        type: 'user',
        attributes: {
          first_name: payload.first_name,
          last_name:  payload.last_name
        },
      }
    }

    return this._super(store, primaryModelClass, user, id)
  }
})
