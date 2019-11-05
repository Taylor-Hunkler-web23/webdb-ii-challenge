const express = require('express');


const carsdb = require('../data/db-config.js');

const router = express.Router();


//returns list of cars
router.get('/', (req, res) => {

    carsdb.select('*').from('cars').then(cars => {
        res.status(200).json(cars)
    }).catch(error => {
        res.status(500).json({ error: 'Fail to get cars' })
    })

});
router.post('/', (req, res) => {
    carsdb.insert(req.body, 'id')
        .into('cars')
        .then(ids => {
            res.status(200).json(ids)
        }).catch(error => {
            res.status(500).json({ error: 'Fail to post account' })
        })
});

//PUT
router.put('/:id', (req, res) => {
    const changes = req.body;

    carsdb('cars')
    .where({id:req.params.id})
    .update(changes)
    .then(count => {
            res.status(200).json(count);
        }).catch(error => {
            res.status(500).json({ error: 'Failed to update account' })
        })
});

module.exports = router;
