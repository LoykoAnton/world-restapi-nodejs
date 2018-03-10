var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost', //mysql database host name
    user: 'root', //mysql database user name
    password: 'root', //mysql database password
    database: 'world' //mysql database name
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('You are now connected with mysql database...')
});

module.exports = connection;