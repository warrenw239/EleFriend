
const App = require('App')
const mongoose = require('mongoose');



// console.log('connected');

console.log('hello world')
        mongoose.connect('mongodb://localhost/dinos').then(() => {

            console.log('database started');
        });
        
        
        
        // const dinoSchema = new mongoose.Schema({
        //     type: String,
        //     location: String,
        // })
        
        // const Dino = mongoose.model('Dino', dinoSchema);
        
        // const stega = new Dino({type: 'stega', location: 'US'})
        //CRUD FUNCTIONS
        
        
        // stega.save().then(console.log('saved'))
        
        
        
        // Dino.find().then((data) => {
        //     console.log(data);
        // });
        
        // // temp()
        
        


    // export default connectFunction
// module.exports.connection = connection;