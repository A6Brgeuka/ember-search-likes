import ApplicationSerializer from './application'
import {typeOf} from 'ember-utils'
import {reads} from 'ember-computed'
import {underscore} from 'ember-string'
import service from 'ember-service/inject'




export default ApplicationSerializer.extend({

  // ----- Services -----
  session: service(),

  // ----- Overridden properties -----


  // ----- Static properties -----


  // ----- Computed properties -----


  // ----- Overridden Methods -----
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
        id:            resourceHash['uid'] || resourceHash['id'] || resourceHash['user_id'],
        type:          modelClass.modelName,
        attributes:    this.extractAttributes(modelClass, resourceHash),
        relationships: {
          user: {
            data: {
              id: this.get('session.data.authenticated.user.id'),
              type: 'user'
            }
          }
        }
      };

      this.applyTransforms(modelClass, data.attributes);
    }

    return { data };
  }
})
