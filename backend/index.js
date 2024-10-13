const express = require("express");
require('dotenv').config();
const connectDb = require('./config/db');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// connecting to the database
connectDb();

// for parsing the data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api', userRoutes);
// routes
app.get('/',(req,res)=>{
    res.send("Welcome to my website");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on:${process.env.PORT}`);
})
