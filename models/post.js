const User = require('./user');
const Category = require('./category');
const Tag = require('./category');
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
// Post model
var Post = Bookshelf.Model.extend({
    tableName: 'posts',
    hasTimestamps: true,
    category: function () {
        return this.belongsTo(Category, 'category_id');
    },
    tags: function () {
        return this.belongsToMany(Tag);
    },
    author: function () {
        return this.belongsTo(User);
    }
});
module.exports = Post;
