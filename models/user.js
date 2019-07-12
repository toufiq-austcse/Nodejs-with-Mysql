
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

// User model
var User = Bookshelf.Model.extend({
    tableName: 'users'
});
module.exports= User;
