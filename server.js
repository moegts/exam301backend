const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app= express();

app.use(cors());

app.use(express.json());

const {
    seedData,
    getData,
    checkUser,
    getUserData,
    addToFav,
    deleteItem,
    updateItem
}=require('./Controllers/fav.Controller')

const PORT = process.env.PORT
const mongoose = require("mongoose");
mongoose.connect(process.env.ATLAS, { useNewUrlParser: true });

app.get('/', function (req, res) { res.send('welcome to my server 301') })

app.post('/seedData', seedData )
app.get('/getData', getData)
app.post('/checkUser/:email', checkUser)
app.get('/getUserData/:email', getUserData)
app.patch('/addToFav/:id/:email', addToFav)
app.delete('/deleteItem/:id/:email', deleteItem)
app.patch('/updateItem/:id/:email', updateItem)
 
app.listen(PORT, console.log(`port is running on ${PORT}`))

