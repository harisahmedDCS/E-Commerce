const express = require('express');
const router = express.Router();

//@route Get api/profiles
//@desc Test route
//@access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
