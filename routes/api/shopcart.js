const express = require('express');
const router = express.Router();
const Card = require('../../models/Card');
const shopcart = require('../../models/shopcart');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');

// var bodyParser = require('body-parser');
// var app = express();
// app.use(bodyParser.urlencoded());
// app.use(bodyParser());
//@route create /api/v1/card
//@desc add into card
//@access Private
router.post('/:id', auth, async (req, res, next) => {
  try {
    const cards = await Card.findById(req.params.id);
    const user = await User.findById(req.user.id);
    // shopcart._id = cards.id;
    cards.quantity = 2;
    cards.users = user.id;
    cards.name = user.name;
    cards.email = user.email;
    cards._id = new ObjectID();
    cards.price = cards.price * cards.quantity;
    const cart = await shopcart.insertMany(cards);
    res.json(cart);
  } catch (err) {
    res.status(400).json({ success: false });
  }
  next();
});

// //@route get /api/v1/card
// //@desc  get specific users card
// //@access Private
// router.get('/:id', auth, async (req, res, next) => {
//   try {
//     const shop = await shopcart.findById(req.params.id);
//     res.status(200).json({ success: true, data: shop });
//   } catch (err) {
//     res.status(400).json({ success: false });
//   }
//   next();
// });
//@route  delete /api/v1/card7
//@desc delete into card
//@access Private
router.delete('/:id', auth, async (req, res, next) => {
  try {
    await shopcart.findByIdAndDelete(req.params.id);
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, data: {}, User: user });
  } catch (err) {
    res.status(400).json({ success: false });
  }
  next();
});
module.exports = router;
