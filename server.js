// External modules
const express = require('express');
const bodyParser = require('body-parser');

// Internal modules
const router = require('./network/routes');

// Port
const PORT = 3000;

// App uses
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app)

app.use('/app', express.static('public'));

app.listen(PORT);
console.log(`App listening on http://localhost:${PORT}`);