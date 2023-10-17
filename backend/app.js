const mongoose = require('mongoose');
const express = require('express');
const  dotenv = require('dotenv');
app = express();

dotenv.config({path: './.env'})

const DB = process.env.DATABASE;
const PORT = process.env.PORT;
mongoose.connect(DB).then(() => {
    console.log(`Connection Successful`)
}).catch((error) => {
    console.log(error);
})



const middleware = (req, res, next) => {
    console.log('Hello middleware');
}

app.get('/about', (req, res) => {
    res.send(`Hello from About Page`);
})

app.get('/profile', (req, res) => {
    res.send(`Hello from profile page`);
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})