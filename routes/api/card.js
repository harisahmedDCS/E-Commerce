const express = require('express');
const router = express.Router();
const Card = require('../../models/Card');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

//@route Get /api/v1/card
//@desc Get all card
//@access Public

router.get('/', async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(400).json({ success: false });
  }
  next();
});

//@route                      create /api/v1/card
//@desc add into card
//@access Public
router.post('/:id', auth, async (req, res, next) => {
  try {
    const cards = await Card.findById(req.params.id);
    const cart = await Card.insertMany(cards);
    console.log(cart);
    res.status(200).json({ success: true, data: cards, data2: cart });
  } catch (err) {
    res.status(400).json({ success: false });
  }
  next();
});

//@route Get /api/v1/card/:id
//@desc Get single card
//@access Public
router.get('/:id', auth, async (req, res) => {
  try {
    const cards = await Card.findById(req.params.id);
    const user = await User.findById(req.user.id)
      .select('-password')
      .select('-conformpassword');
    res.json(cards);
    // res.status(200).json({ success: true, data: [cards], data2: user });

    // const user = await User.findById(req.user.id).select('-password');
    // res.json(user);
  } catch (err) {
    res.status(400).json({ success: false });
  }
});

module.exports = router;
