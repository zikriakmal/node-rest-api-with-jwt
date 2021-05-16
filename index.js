const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

//Import routes
const authRoute = require('./router/auth');

//connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology:true },()=>{
    console.log(process.env.DB_CONNECT)
})

//Middleware 
app.use(express.json());

//route middleware
app.use('/api/user', authRoute);

app.listen(3000, () => { console.log('Server up and running port 3000') })