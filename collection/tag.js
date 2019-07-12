const Tag = require('../models/tag');
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'knex_test'
    }
});
const Bookshelf = require('bookshelf')(knex);

var Tags = Bookshelf.Collection.extend({
    model: Tag
});
module.exports = Tags;
