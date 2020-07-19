const mongoose = require('mongoose');
const shopcartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
  TotalPrice: {
    type: Number,
  },
  users: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },

  name: {
    type: String,
    ref: 'user',
  },
  email: {
    type: String,
    ref: 'user',
  },
});

//Static method to get avg of card tuitions
shopcartSchema.statics.getTotalPrice = async function (cartId, _id) {
  console.log('Calculating avg cost....'.blue);
  const obj = await this.aggregate([
    {
      $match: { users: cartId },
    },
    {
      $group: {
        _id: '$users',
        TotalPrice: { $sum: '$price' },
      },
    },
  ]);
  console.log(obj);
  try {
    await this.model('shopcart').findByIdAndUpdate(_id, {
      TotalPrice: obj[0].TotalPrice,
      ans: console.log('run'),
    });
  } catch (err) {
    console.log(err);
  }
};
//Call get  TotalPrice after save
shopcartSchema.pre('validate', function (next) {
  this.constructor.getTotalPrice(this.users, this._id);
  // console.log(`my user ${this._id} `);
  next();
});
// //Call get TotalPrice before remove
// shopcartSchema.pre('remove', function () {
//   this.constructor.getTotalPrice(this.users);
// });

module.exports = Shopcart = mongoose.model('shopcart', shopcartSchema);
