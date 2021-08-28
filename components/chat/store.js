// External modules
const model = require('./model');

// Internal modules
const Model = require('./model');

function getChatsById(userId) {
	return new Promise((resolve, reject) => {
		let filter = {};
		if (userId) {
			filter = userId
		}

		Model.findById(filter)
	    	.populate('users')
	    	.exec((err, populated) => {
	    		if (err) {
	    			reject(err);
	    			return false;
	    		}

	    		resolve(populated);
	    	});
	});
}

// function getChatsById(userId) {
// 	const chats = Model.findById(userId);

// 	console.log(chats);

// 	return chats;
// }

async function addChat(chat) {
    const newChat = new Model(chat);

    return newChat.save();
}

async function deleteChat(id) {
    await model.findByIdAndDelete(id);

    return;
}

module.exports = {
    listById: getChatsById,
    add: addChat,
    delete: deleteChat
}