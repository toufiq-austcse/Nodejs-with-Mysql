const User = require('../models/user');
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
var Users = Bookshelf.Collection.extend({
    model: User
});
module.exports = Users;
