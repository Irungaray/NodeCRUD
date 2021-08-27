// External modules
const model = require('./model');

// Internal modules
const Model = require('./model');

async function getUsers() {
    const users = await Model.find()

    return users;
}

async function getUserById(id) {
    const user = await Model.findById(id);

    return user;
}

async function addUser(user) {
    const newUser = new Model(user);

    return newUser.save();
}

async function patchUser(id, user) {
    const foundUser = await Model.findById(id);

    console.log(foundUser);

    foundUser.name = user;
    const updatedUser = await foundUser.save();

    return updatedUser;
}

async function deleteUser(id) {
    await model.findByIdAndDelete(id);

    return;
}

module.exports = {
    list: getUsers,
    listById: getUserById,
    add: addUser,
    update: patchUser,
    delete: deleteUser
}