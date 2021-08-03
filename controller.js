'user strict';

const connection = require('./connection.js');
const response = require('./response.,js');

exports.index = (request,response) => {
    response.ok('Aplikasi RestAPI saya berjalan') 
}