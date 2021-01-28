//Calling the Modules we need
const express = require('express');
const connectDB = require("./config/connect");
const User = require('./Models/User')

//Defining a 2000like my server Port
const port = 2000;

// Connect to my BD
connectDB();
const app = express();
app.use(express.json());

app.use('/api/users', require('./routes/User'));

app.get('/', (req, res) => {
    res.send('<h1>Hi</h1>');
}
)

app.listen(port, (err) => err ? console.error(err) : console.log(`the server is running: http://localhost:${port}`));
