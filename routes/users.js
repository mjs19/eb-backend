var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET all users */
router.get('/', (req, res) => {
  db.user.findAll({
    include: [{
      model: db.image
    }],
    attributes: {
      exclude: ['password'],
    }
  })
  .then((users) => {
    res.status(200).json(users);
  })
  .catch(function(err) {
    res.json(err);
  });

});

/* GET user by ID */
router.get('/:id', (req, res) => {
  db.user.find({
    where: { id: req.params.id },
    attributes: {
      exclude: ['password'],
    }
  })
  .then((users) => {
    res.status(200).json(users);
  })
  .catch(function(err) {
    res.json(err);
  });

//
//   /* Create new user */
//   router.post('/', (req, res) => {
//     db.user.find({
//       where: {
//         email: req.body.email
//       }
//     })
//     .then((result) => {
//       if (result) {
//         res.json({ 'message': 'user already exists' })
//       } else {
//         db.user.create({
//           first_name: req.body.first,
//           last_name: req.body.last,
//           email: req.body.email,
//           password: req.body.password,
//           createdAt: new Date(),
//           updatedAt: new Date()
//         })
//         .then((result) => {
//           res.json({ 'message': 'user created!', 'user': result })
//         })
//       }
//     })
//     .catch(err => {
//       res.json(err);
//     })
//   })
//
//   /* Update user */
//   router.put('/', (req, res) => {
//     db.user.find({
//       where: {
//         id: req.body.id
//       }
//     })
//     .then((user) => {
//       user.update({
//         first_name: req.body.first,
//         last_name: req.body.last,
//         password: req.body.password,
//         updatedAt: new Date()
//       })
//       .then((updatedUser) => {
//         res.status(200).json({ 'message': 'user updated!', 'user': updatedUser })
//       })
//     })
//     .catch(err => {
//       res.json(err);
//     })
//   })
// });
//
// /* Delete user */
// router.delete('/:id', (req, res) => {
//   db.user.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then((userDestroyed) => {
//     res.status(200).json({'message': 'user destroyed', 'user': req.params.id})
//   })
//   .catch(err => {
//     res.json(err)
//   })
// })


module.exports = router;
