const Post = require('./post');
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
// Category model
var Category = Bookshelf.Model.extend({
    tableName: 'categories',
    posts: function () {
        return this.hasMany(Post, 'category_id');
    }
});
module.exports = Category;
