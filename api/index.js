const { connection } = require('./database/connection');
const express = require('express');
const cors = require('cors');

// DB Connection
connection();

// Express server creation
const app = express();

app.use(cors());
app.use(express.json()); // Parse all the objects cames from the requests to a JSON

app.listen(3001, () => { 
    console.log('Server running at port 3001!');
});
