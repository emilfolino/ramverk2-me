var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const data = {
        name: "Emil Folino",
        city: "Rödeby",
        description: "Dansk som nog blir mer och mer svensk. Gillar JavaScript, snabba hemsidor och jordgubbstårta.",
    };

    res.json(data);
});

module.exports = router;
