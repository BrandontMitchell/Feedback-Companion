const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();


require('./routes/authRoutes')(app); // instead of assigning a const, we can directly apply an 
                                    // argument to the require statement

const PORT = process.env.PORT || 5000;
app.listen(PORT);
