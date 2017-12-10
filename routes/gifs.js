var express = require('express');
var router = express.Router();
const db = require('../models');
const apiKey = 'f6dNA2KM5qhAQC5jg1yxOgkNx0UMCvYT';
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET routes for all gifs & by emotion */
router.get('/', (req, res) => {
    db.gif.findAll()
    .then(all => {
        res.json(all);
    })
});

// get by emotion
router.get('/*', (req, res) => {
    db.gif.find({
      // remove forward slash from url path
        where: { emotion: req.path.replace(/[^-a-z0-9]+/g, "") }
    })
    .then(all => {
      if(all) {
        res.json(all);
      } else {
        res.json({"message": "no GIFS found!"})
      }
    })
    .catch(err => {
      res.json(err);
    })
});


/* POST new gif (we might not need/use it tho) */
router.post('/', (req, res) => {
    db.gif.create({
        emotion: req.body.emotion,
        url: req.body.url,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(newGIF => {
      res.json({"message": "success!", "gif created": newGIF})
    })
    .catch(err => {
      res.json(err);
    });
})



module.exports = router;
