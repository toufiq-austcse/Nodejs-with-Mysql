const Post= require('./post');
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
// Tag model
var Tag = Bookshelf.Model.extend({
    tableName: 'tags',
    posts: function () {
        return this.belongsToMany(Post);
    }
});
module.exports = Tag;
