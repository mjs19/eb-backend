var express = require('express');
var router = express.Router();
const db = require('../models');
var request = require('request');
var indico = require('indico.io');
indico.apiKey =  '7a00385289015143942a0b624681cd19';
const clientId = '8945a218b217c4f';
// const clientSecret = '1f67214be6fde71891ee7ce43c89ee7f55fd411a';

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
  console.log('~~~~~~~~~~~~~REQ BODY IMAGE: ', req.body.image);

  if(req.body.image.contains('base64,')){
    console.log("base64");
  } else {
    // post file to imgur to generate url
    request({
        url: 'https://api.imgur.com/3/image',
        method: 'POST',
        json: true,
        headers: {
            'authorization': `Client-ID ${clientId}`,
            'content-type': 'application/json'
        },
        body: { image: req.body.image } // image must be a binary file, base64 data, or a URL
    }, function(error, response, body){
        if(error) {
            res.json(error);
        } else {
            var imageUrl = response.body.data.link;
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
                    res.json({
                        'message': 'image created!!',
                        'image': newImage
                    });
                });
            })
            .catch(logError);
        }
    })
  }

});

// /* DELETE an image */
// router.delete('/:id', (req, res) => {
//     db.image.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then((imageDestroyed) => {
//       res.status(200).json({'message': 'image deleted', 'image':  imageDestroyed })
//     })
//     .catch(err => {
//       res.json(err)
//     })
//   });
//
//
module.exports = router;
