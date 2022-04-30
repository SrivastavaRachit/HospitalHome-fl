const Model = require('../models/reviewModel');
const router = require('express').Router();


router.post('/add', (req, res) => {
    data = req.body;

    new Model(data).save()
        .then(data => {
            console.log('review  data saved');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;