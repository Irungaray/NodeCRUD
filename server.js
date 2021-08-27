// External modules
const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config({ path: ".env" });

// Internal modules
const db = require('./db');
const dbUri = process.env.DB_URI;
const router = require('./network/routes');

// Initialize DB
db(dbUri)

// App uses
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app)

app.use('/app', express.static('public'));

app.listen(process.env.PORT);
console.log(`App listening on http://localhost:${process.env.PORT}`);