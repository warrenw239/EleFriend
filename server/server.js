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
  });
});

//ADD ELEPHANT TO DB ON CLICK*
App.post('/', (req, res) => {
  // console.log('hello');
  // console.log(req.query);
  elephant.create(req.query);
});

//3rd PARTY API ON BUTTON CLICK
App.get('/data', (req, res) => {
  mod
    .getElephants()
    .then((elephants) => {
      console.log(elephants);
      res.send(elephants);
    })
    .catch((err) => {
      console.log('err getting 3rd party data');
    });
});

//DELETE ALL FRIENDS
App.put('/friends', (req, res) => {
  // console.log('deleting friends')
  elephant
    .deleteMany()
    .then(elephant.find())
    .then((elephants) => {
      console.log(elephants, 'why am i getting called?');
    });
});

App.post('/friends', (req, res) => {
  // console.log('lets update a name!')
  console.log(req.query);
  elephant
    .updateMany({ Ename: req.query.oldName }, { Ename: req.query.newName })
    .then((result) => {
      console.log(result);
    })
    // .then(elephant.find({Ename: req.query.newName}))
    .then(elephant.find())
    .then((elephants) => {
      console.log(elephants)
    });

});

App.listen(8080, () => {
  console.log('express app started');
});

module.exports.App = App;
