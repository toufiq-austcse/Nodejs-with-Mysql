const Category = require('../models/category');
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

var Categories = Bookshelf.Collection.extend({
    model: Category
});
module.exports = Categories;
