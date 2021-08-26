const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.log('No user or message');
            return reject('Incorrect data');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }

        store.add(fullMessage);
        resolve(fullMessage);
    })
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages
};