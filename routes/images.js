var express = require('express');
var router = express.Router();
const db = require('../models');
var request = require('request');
var indico = require('indico.io');
indico.apiKey =  '7a00385289015143942a0b624681cd19';
const clientId = '8945a218b217c4f';

var rp = require('request-promise');

/* GET all images */
router.get('/', (req, res) => {
    db.image.findAll()
    .then((images) => {
        res.json(images)
    })
    .catch(err => res.json(err));
});

/* GET image by ID */
router.get('/*', (req, res) => {
    db.image.find({
        where: { id: req.path.replace(/[^-a-z0-9]+/g, "") } // hard coded for testing
      })
    .then((image) => {
      if(image) {
        res.json(image)
      } else {
        res.json({'message': 'no image found!'})
      }
    })
    .catch(err => res.json(err));
});

// /* POST image */
router.post('/', (req, res) => {
  // post file to imgur to generate url
  var imageUrl = req.body.imageUrl;
  console.log("THIS IS IMAGE URL: ", req.body.imageUrl);
  var response = function(res) { console.log(res); }
  var logError = function(err) { console.log(err); }
  // single example
  indico.fer(imageUrl)
  .then(response => {
    db.image.create({
      url: imageUrl,
      fave: false,
      neutral: response.Neutral,
      happy: response.Happy,
      sad: response.Sad,
      surprised: response.Surprise,
      fearful: response.Fear,
      angry: response.Angry,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(newImage => {
      res.json(newImage);
    });
  })
  .catch(logError);
});

/* DELETE an image */
router.delete('/:id', (req, res) => {
    db.image.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((imageDestroyed) => {
      res.status(200).json({'message': 'image deleted', 'image':  imageDestroyed })
    })
    .catch(err => {
      res.json(err)
    })
  });


module.exports = router;
