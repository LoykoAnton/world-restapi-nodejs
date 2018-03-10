var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', function (req, res) {
    connection.query('select * from countrylanguage', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

//rest api to create a new customer record into mysql database
router.post('/', function (req, res) {
    var params = req.body;
    console.log(params);
    connection.query('INSERT INTO countrylanguage SET ?', params, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to update record into mysql database
router.put('/:language', function (req, res) {
    var query = 'UPDATE `countrylanguage` SET ? where `Language`=\'' + req.params.language + '\'';
    connection.query(query, req.body, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

module.exports = router;