var express = require('express');
var router = express.Router();
const db = require('../models');
var request = require('request');
var indico = require('indico.io');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
indico.apiKey =  '7a00385289015143942a0b624681cd19';
const clientId = '8945a218b217c4f';
const cloudName = 'emotionalbreakdown';
const unsignedUploadPreset = 'atg4ausd';
var FormData = require('form-data');
var FileAPI = require('file-api')
var File = FileAPI.File;

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
  // REQUEST PROMISE way
    var file = new File({
      name: 'test.jpg',//req.body.image.slice(21),
      path: req.body.image,
      type: "image/jpeg",
      lastModified: new Date()
    });
  var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  var options = {
    method: 'POST',
    uri: url,
    body: {
        file: file,
        upload_preset: unsignedUploadPreset
    },
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        // POST succeeded...
        console.log("!~~~~~~THIS IS THE RP RESPONSE~~~~~~! ", parsedBody)
    })
    .catch(function (err) {
        // POST failed...
        console.log(err);
    });


  // ths is IMGUR STUFF
  // post file to imgur to generate url
  // request({
  //     url: 'https://api.imgur.com/3/image',
  //     method: 'POST',
  //     json: true,
  //     headers: {
  //         'authorization': `Client-ID ${clientId}`,
  //         'content-type': 'application/json'
  //     },
  //     body: { image: req.body.image } // image must be a binary file, base64 data, or a URL
  // }, function(error, response, body){
  //     if(error) {
  //         res.json(error);
  //     } else {
  //         var imageUrl = response.body.data.link;
  //         var response = function(res) { console.log(res); }
  //         var logError = function(err) { console.log(err); }
  //         // single example
  //         indico.fer(imageUrl)
  //         .then(response => {
  //             db.image.create({
  //                 url: imageUrl,
  //                 fave: false,
  //                 neutral: response.Neutral,
  //                 happy: response.Happy,
  //                 sad: response.Sad,
  //                 surprised: response.Surprise,
  //                 fearful: response.Fear,
  //                 angry: response.Angry,
  //                 createdAt: new Date(),
  //                 updatedAt: new Date()
  //             })
  //             .then(newImage => {
  //                 res.json({
  //                     'message': 'image created!!',
  //                     'image': newImage
  //                 });
  //             });
  //         })
  //         .catch(logError);
  //     }
  //   })

  // // CLOUD STUFS
  // console.log('~~~~~~HI THIS IS REQ BODY IMAGE~~~~~~ ', req.body.image);
  // var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  // var xhr = new XMLHttpRequest();
  // var fd = new FormData();
  // xhr.open('POST', url, true);
  // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  // xhr.onreadystatechange = function(e) {
  // if (xhr.readyState == 4 && xhr.status == 200) {
  //   // File uploaded successfully
  //   var response = JSON.parse(xhr.responseText);
  //   var imageUrl = response.secure_url;
  //   console.log("~~~~~~UPLOAD URL~~~~~~ ", imageUrl);
    // // THIS IS DB STUFF
    // var response = function(res) { console.log(res); }
    // var logError = function(err) { console.log(err); }
    // // single example
    // indico.fer(imageUrl)
    // .then(response => {
    //     db.image.create({
    //         url: imageUrl,
    //         fave: false,
    //         neutral: response.Neutral,
    //         happy: response.Happy,
    //         sad: response.Sad,
    //         surprised: response.Surprise,
    //         fearful: response.Fear,
    //         angry: response.Angry,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     })
    //     .then(newImage => {
    //         res.json({
    //             'message': 'image created!!',
    //             'image': newImage
    //         });
    //     });
    // })
    // .catch(logError);
//   }
// };
//   fd.append('upload_preset', unsignedUploadPreset);
//   fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
//   var file = new File({
//     name: 'test.jpg',//req.body.image.slice(21),
//     path: req.body.image,
//     type: "image/jpeg",
//     lastModified: new Date()
//   });
//   fd.append('file', JSON.stringify(file)); // going to send it as file:// format
//   xhr.send(fd);
// });

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
