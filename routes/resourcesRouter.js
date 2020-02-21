const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
    .then(re => {
      res.status(200).json(re);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Error in retrieving resources' });
    });
});

router.get(`/:id`, (req, res) => {
  Resources.findById(req.params.id)
    .then(re => {
      res.status(200).json(re);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Error retrieving resource' });
    });
});

router.post('/', (req, res) => {
  Resources.add(req.body)
    .then(re => {
      res.status(201).json(re);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Error in adding resource' });
    });
});

module.exports = router;
