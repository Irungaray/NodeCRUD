// External modules
const model = require('./model');

// Internal modules
const Model = require('./model');

async function getMessages(filterUser) {
    let filter = {};

    if (filterUser !== null) {
        filter = { user: filterUser.toLowerCase() }
    }

    const messages = await Model.find(filter);

    return messages;
}

async function getMessageById(id) {
    const message = await Model.findById(id);

    return message;
}

function addMessage(message) {
    const myMessage = new Model(message);

    myMessage.save();
}

async function patchMessage(id, message) {
    const foundMessage = await Model.findById(id);

    foundMessage.message = message;
    const updatedMessage = await foundMessage.save();

    return updatedMessage;
}

async function deleteMessage(id) {
    await model.findByIdAndDelete(id);

    return;
}

module.exports = {
    list: getMessages,
    listById: getMessageById,
    add: addMessage,
    update: patchMessage,
    delete: deleteMessage
}