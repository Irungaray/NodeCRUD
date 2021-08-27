// External modules
const db = require('mongoose');

// Internal modules
const Model = require('./model');

// yes, i know it is a bad practice
// const dbUri = 'mongodb+srv://dbUser:dbUserPassword@cluster0.g1h3e.mongodb.net/test';
const dbUri = 'mongodb://dbUser:dbUserPassword@cluster0-shard-00-00.g1h3e.mongodb.net:27017,cluster0-shard-00-01.g1h3e.mongodb.net:27017,cluster0-shard-00-02.g1h3e.mongodb.net:27017/messageDb?ssl=true&replicaSet=atlas-fn0asi-shard-0&authSource=admin&retryWrites=true&w=majority'

db.Promise = global.Promise;
db.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'messageDb'
})

console.log('BBDD Connected');

function addMessage(message) {
    const myMessage = new Model(message);

    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();

    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}