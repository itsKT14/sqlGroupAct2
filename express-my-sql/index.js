//import modules
const express = require('express');
const usersRouter = require('./routes/users');
const app = express();
const sql = require('./database/mySql');
const cors = require('cors');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//routes
app.use('/', usersRouter);

//check connection
const port=8080;
app.listen(port, ()=>{
    console.log("Running in port:",port);
});

sql.connect((error)=>{
    if(!error) {
        console.log('Database connected');
    } else {
        console.log('Database disconnected', JSON.stringify(error));
    }
});