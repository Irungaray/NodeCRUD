const store = require('./store');

function getChatsById(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.log('No Id');
            return reject('Incorrect data');
        }

        const response = await store.listById(id);
        resolve(response);
    })
}

function addChat(users) {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            console.log('Invalid user list');
            return reject('Incorrect data');
        }

        const newChat = {
            users,
        }

        store.add(newChat);
        resolve(newChat);
    })
}

function deleteChat(id) {
    return new Promise(async (resolve, reject) => {
        if(!id) {
            console.log('No id');
            return reject('Incorrect data');
        }

        const response = await store.delete(id);
        resolve(response);
    })
}

module.exports = {
    getChatsById,
    addChat,
    deleteChat,
};