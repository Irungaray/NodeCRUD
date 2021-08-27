// External modules
const db = require('mongoose');

db.Promise = global.Promise;

async function connect(dbUri) {
    await db.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'messageDb'
    })

    console.log('DDBB Connected');
}

module.exports = connect;