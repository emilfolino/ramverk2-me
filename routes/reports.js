var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kmom01', function(req, res, next) {
    const data = {
        text: "Det här är ett grymt kmom."
    };

    res.json(data);
});

module.exports = router;
