const express = require("express");
require('dotenv').config();
const connectDb = require('./config/db');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// connecting to the database
connectDb();

const allowedOrigins = ["https://quiz-web-application-xyz.vercel.app"]; 
app.use(
    cors({
        origin: function (origin, callback) {
            if (
                !origin || 
                allowedOrigins.includes(origin)  
            ) {
                callback(null, true); 
            } else {
                callback(new Error("Not allowed by CORS")); 
            }
        },
        credentials: true, 
        optionsSuccessStatus: 200 
    })
);

// for parsing the data
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/api', userRoutes);
// routes
app.get('/',(req,res)=>{
    res.send("Welcome to my website");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on:${process.env.PORT}`);
})
