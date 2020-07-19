const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load env variables
dotenv.config({ path: './config/config.env' });
//Load models
const Card = require('./models/Card');
//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

//Read JSON files
const cards = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/card_data.json`, 'utf-8')
);
//Import into debug
const importData = async () => {
  try {
    await Card.create(cards);
    console.log('Data Imported....'.cyan.inverse);
    console.log('run');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Import into debug
const deleteData = async () => {
  try {
    await Card.deleteMany();
    console.log('Data destroyed....'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
