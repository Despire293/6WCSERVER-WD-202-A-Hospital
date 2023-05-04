const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose'); //should be 6.10.5
mongoose.set('strictQuery', false);
var routes = require('./route/routes');

port = process.env.PORT || 4000;

app.use(cors());

app.listen(port, (error) => {

    if (error) {
        console.log("ERROR!")
    }
    else {
        console.log(`SERVER STARTED! SERVER RUNNING IN ${port}`);
        
    }  
})

//connection on mongoose
mongoose.connect("mongodb://127.0.0.1:27017/PHonedb", 
{useNewUrlParser: true, useUnifiedTopology: true}, 
(error) => {
    if (error) {
        console.log("error in connecting!");
    }
    else {
        console.log("Successful connection connected now in 'PHonedb'");
    }
})

app.use(express.json());
app.use(routes);