const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Error in retrieving projects' });
    });
});

router.get(`/:id`, (req, res) => {
  Projects.findById(req.params.id)
    .then(proj => {
      res.status(200).json(proj);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Error retrieving project' });
    });
});

router.post('/', (req, res) => {
  Projects.add(req.body)
    .then(proj => {
      res.status(201).json(proj);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: 'Error in adding project' });
    });
});

// router.get('/:project_id/tasks', (req, res) => {
//   Tasks.findAll(req.params.project_id)
//     .then(task => {
//       res.status(200).json(task);
//     })
//     .catch(err => {
//       res.status(500).json({ msg: 'Error in retrieving project tasks ' });
//     });
// });

// router.get('/:project_id/tasks/:id', (req, res) => {
//   Tasks.findById(req.params.id)
//     .then(task => {
//       res.status(200).json(task);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ msg: 'Error retrieving task' });
//     });
// });

// router.post(`/:id/tasks`, (req, res) => {
//   Tasks.add(task, id)
//     .then(task => {
//       res.status(200).json(task);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ msg: 'Error retrieving task' });
//     });
// });

module.exports = router;
