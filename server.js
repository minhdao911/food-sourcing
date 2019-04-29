require('dotenv').config();

const express    = require('express'),
      bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const supplychainRoutes = require('./routes/supplychain');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/sc', supplychainRoutes);

app.listen(port, () => {
    console.log("Server is running at " + port);
});