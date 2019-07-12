const Post = require('../models/post');
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
var Posts = Bookshelf.Collection.extend({
    model: Post
});

module.exports = Posts;
