var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', function (req, res) {
    connection.query('select * from country', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

router.get('/:id', function (req, res) {
    connection.query('select * from country where code=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

//rest api to create a new customer record into mysql database
router.post('/', function (req, res) {
    var params = req.body;
    console.log(params);
    connection.query('INSERT INTO country SET ?', params, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to update record into mysql database
router.put('/:code', function (req, res) {
    var query = 'UPDATE `country` SET ? where `Code`=\'' + req.params.code + '\'';
    console.log(query);
    connection.query(query, req.body, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

//rest api to delete record from mysql database
router.delete('/:code', function (req, res) {
    connection.query('DELETE FROM `country` WHERE `Code`=?', [req.params.code], function (error, results, fields) {
        if (error) throw error;
        res.json('Record has been deleted!');
    });
});

module.exports = router;