
const express = require('express');
const App = express()
const mongoose = require('mongoose')



//DATABASE
mongoose.connect('mongodb://localhost/dinos').then(() => {

            console.log('database started');
        });
const dinoSchema = new mongoose.Schema({
            type: String,
            location: String,
        })
        
        const Dino = mongoose.model('Dino', dinoSchema);
        
        const stega = new Dino({type: 'stega', location: 'US'})
        // CRUD FUNCTIONS
        
        
        dinos.Dino.save({type: 'stega', location: 'mexico'}).then(console.log('saved'));
        


//START SERVER
App.listen(8080, () => {
    console.log('express app started');
});







//ROUTES

App.get('/', (req, res) => {
    res.send('hello from express');
});
App.post('/', (req, res) => {
    res.send('hello from express');
});



//functions (CRUD)


module.exports = {
    App
}