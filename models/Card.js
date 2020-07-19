const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
  },
  TotalPrice: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  users: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },

  // cart: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'Card',
  //   required: true,
  // },
});

// //Static method to get avg of card tuitions
// CardSchema.statics.getAverageCost = async function (userId) {
//   console.log('Calculating avg cost....'.blue);
//   const obj = await this.aggregate([
//     {
//       $match: { user: userId },
//     },
//     {
//       $group: {
//         _id: '$user',
//         averageCost: { $avg: '$price' },
//       },
//     },
//   ]);
//   console.log(obj);
//   // try {
//   //   await this.model('User').findByIdAndUpdate(userId, {
//   //     averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
//   //   });
//   // } catch (err) {
//   //   console.error(err);
//   // }
// };

// //Call get AverageCost after save
// CardSchema.post('save', function () {
//   console.log('run');
//   this.constructor.getAverageCost(this.user);
// });
// //Call getAverageCost before remove
// CardSchema.pre('remove', function () {
//   this.constructor.getAverageCost(this.user);
// });
module.exports = Card = mongoose.model('card', CardSchema);
