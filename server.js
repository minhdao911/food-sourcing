require('dotenv').config();

const express    = require('express'),
      bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const supplychainRoutes = require('./routes/supplychain');

app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Database connection
mongoose.connect("mongodb+srv://admin:howdy@food-souce-db-5nbdt.mongodb.net/test?retryWrites=true",
 {
    useNewUrlParser: true,
}).then(()=> {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database. Exiting now.. ",err);
    process.exit();
})


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/sc', supplychainRoutes);



app.listen(port, () => {
    console.log("Server is running at " + port);
});


