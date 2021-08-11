var express = require('express');
var router = express.Router();
const Search = require('../models/search.js');
var fs = require('fs');

router.post('/search', async (req, res ,next) => {

    console.log(req.body);

    
    const result = await Search.create({
        id: req.body.word,
        search_result: req.body.word
    });
    console.log(result);
});

module.exports = router;