const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { result } = require('underscore');
const mod = require('./animalApi');

//DATABASE
mongoose.connect('mongodb://localhost/dinos').then(() => {
  console.log('database started');
});
const elephantSchema = new mongoose.Schema({
  Ename: String,
  sex: String,
  species: String,
  note: String,
  image: String,
  index: Number,
});

const elephant = mongoose.model('Dino', elephantSchema);

//START SERVER
const App = express();

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
App.use(express.static(CLIENT_PATH));

//ROUTES

//ON MOUNT LOAD LIST OF FRIENDS
App.get('/friends', (req, res) => {
  elephant.find().then((savedElephants) => {
    res.send(savedElephants);
  }).catch((err) => {
    console.log(err);
  })
});

//ADD ELEPHANT TO DB ON CLICK*
App.post('/', (req, res) => {
  elephant.create(req.query);
});

//3rd PARTY API ON BUTTON CLICK
App.get('/data', (req, res) => {
  mod
    .getElephants()
    .then((elephants) => {
      res.send(elephants);
    })
    .catch((err) => {
      console.log(err);
    });
});

//DELETE ALL FRIENDS
App.put('/friends', (req, res) => {
  elephant
    .deleteMany()
    .then(elephant.find())
    .then((elephants) => {
      console.log(elephants);
    }).catch((err) => {
      console.log(err);
    })
});

App.post('/friends', (req, res) => {
  console.log(req.query);
  elephant
    .updateMany({ Ename: req.query.oldName }, { Ename: req.query.newName })
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
});

App.listen(8080, () => {
  console.log('express app started');
});

module.exports.App = App;
