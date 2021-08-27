const store = require('./store');

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function getMessageById(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.log('No id');
            return reject('Incorrect data');
        }

        const response = await store.listById(id);
        resolve(response);
    })
}

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

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            console.log('No user or id');
            return reject('Incorrect data');
        }

        const response = await store.update(id, message);
        resolve(response);
    })
}

function deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.log('No id');
            return reject('Incorrect data')
        }

        const response = await store.delete(id);
        resolve(response);
    })
}

module.exports = {
    getMessages,
    getMessageById,
    addMessage,
    updateMessage,
    deleteMessage,
};