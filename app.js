const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    
   console.log('conncted to the databse '+ config.database); 
    
});

mongoose.connection.on('error', (err) => { 
   console.log('Error in connecting to the databse '+ config.database + 'error-'+ err ); 
});
const app = express();
const port = 3600;

const users = require('./routes/users');
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));



//body parser middleware
app.use(bodyParser.json());
app.use('/users',users);


//req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.
//index route
app.get('/', (req, res) => {
    res.send('my data'); 
    
    
});




app.listen(port, () => {
    
    console.log('server started ');
    
});
