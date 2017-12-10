var express = require('express');
var router = express.Router();
const db = require('../models');
const apiKey = 'f6dNA2KM5qhAQC5jg1yxOgkNx0UMCvYT';

/* GET routes for all gifs & by emotion */
router.get('/', (req, res) => {
    db.gif.findAll()
    .then(all => {
        res.json(all);
    })
});

// router.get('/angry', (req, res) => {
//     db.gif.find({
//         where: { emotion: 'angry' }
//     })
//     .then(all => {
//         res.json(all);
//     })
// });
//
// router.get('/happy', (req, res) => {
//     db.gif.find({
//         where: { emotion: 'happy' }
//     })
//     .then(all => {
//         res.json(all);
//     })
// });
//
// router.get('/neutral', (req, res) => {
//     db.gif.find({
//         where: { emotion: 'neutral' }
//     })
//     .then(all => {
//         res.json(all);
//     })
// });
//
// router.get('/surprised', (req, res) => {
//     db.gif.find({
//         where: { emotion: 'surprised' }
//     })
//     .then(all => {
//         res.json(all);
//     })
// });
//
// router.get('/fearful', (req, res) => {
//     db.gif.find({
//         where: { emotion: 'fearful' }
//     })
//     .then(all => {
//         res.json(all);
//     })
// });
//
// router.get('/sad', (req, res) => {
//     db.gif.find({
//         where: { emotion: 'sad' }
//     })
//     .then(all => {
//         res.json(all);
//     })
// });
//
// /* POST new gif (we might not need/use it tho) */
// router.post('/', (req, res) => {
//     db.gif.create({
//         emotion: req.body.emotion,
//         url: req.body.url,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })
// })
//
//
//
module.exports = router;
