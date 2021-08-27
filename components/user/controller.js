const store = require('./store');

function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getUserById(id) {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            console.log('No id');
            return reject('Incorrect data');
        }

        const response = await store.listById(id);
        resolve(response);
    })
}

function addUser(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.log('No username');
            return reject('Incorrect data');
        }

        const newUser = {
            name,
        }

        store.add(newUser);
        resolve(newUser);
    })
}

function updateUser(id, name) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name) {
            console.log('No id or username');
            return reject('Incorrect data');
        }

        const response = await store.update(id, name);
        resolve(response);
    })
}

function deleteUser(id) {
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
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
};