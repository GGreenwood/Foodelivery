/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name : { type: 'string' },

        image : { type: 'string' },

        price : { type: 'float' },

        description : { type: 'string' },

        restaurant : { model: 'restaurant' },

        type : {type: 'integer'},

        image : {type: 'string'}
    }
};

