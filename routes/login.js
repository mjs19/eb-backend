// var express = require('express');
// var router = express.Router();
// const db = require('../models');
//
// router.post('/', (req, res) => {
//     db.user.find({
//         where: {
//             email: req.body.email
//         }
//     })
//     .then((user) => {
//         if (!user) {
//             res.json({'message': 'invalid email or passwored' });
//         }
//         else if(user.password === req.body.password){
//             res.json({'message': 'success!', 'user': user});
//         } else {
//             res.json({'message': 'invalid email or passwored' })
//         }
//     })
//     .catch(err => {
//         res.json(err);
//     })
// });
//
// module.exports = router;
