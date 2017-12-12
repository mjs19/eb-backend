var express = require('express');
var router = express.Router();
const db = require('../models');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET all users */
router.get('/', (req, res) => {
  console.log('req: ', req);
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
router.get('/*', (req, res) => {
  db.user.find({
    where: { id: req.path.replace(/[^-a-z0-9]+/g, "") },
    attributes: {
      exclude: ['password'],
    }
  })
  .then((user) => {
    if(user) {
      res.status(200).json(user);
    } else {
      res.json({"message": "no user found!"});
    }
  })
  .catch(function(err) {
    console.log(err);
    res.json({"message": "no user found!"});
  });

});


  /* Create new user */
  router.post('/', (req, res) => {
    db.user.find({
      where: {
        email: req.body.email
      }
    })
    .then((result) => {
      if (result) {
        res.json({ 'message': 'user already exists' })
      } else {
        db.user.create({
          firstName: req.body.first,
          lastName: req.body.last,
          email: req.body.email,
          password: req.body.password,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then((result) => {
          res.json(result);
        })
      }
    })
    .catch(err => {
      res.json(err);
    })
  });

//   /* Update user */
//   router.put('/:id', (req, res) => {
//     db.user.find({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then((user) => {
//       user.update({
//         firstName: req.body.first,
//         lastName: req.body.last,
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
/* Delete user */
router.delete('/:id', (req, res) => {
  db.user.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((userDestroyed) => {
    res.status(200).json({'message': 'user destroyed', 'user': req.params.id})
  })
  .catch(err => {
    res.json(err)
  })
})


module.exports = router;
