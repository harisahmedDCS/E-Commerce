const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv');
//Load env variables
dotenv.config({ path: './config/config.env' });
const morgan = require('morgan');
const app = express();

//Connect Database
connectDB();
//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  console.log(`${process.env.NODE_ENV}`);
}

//body parser
app.use(express.json());

//Init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API running'));

//Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/v1/card', require('./routes/api/card'));
app.use('/api/v1/shopcart', require('./routes/api/shopcart'));

// public images
app.use(express.static(path.join(__dirname, 'img')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
