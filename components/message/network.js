// External modules
const express = require('express');
const router = express.Router();

// Internal modules
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error getting messages', 500, e)
        })
    }
)

router.get('/:id', function (req, res) {
    controller.getMessageById(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error retrieving message', 500, e);
        })
    }
)

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.chat, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error creating message', 500, e);
        })
    }
)

router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error updating message', 500, e);
        })
    }
)

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then((data) => {
            response.success(req, res, `Message ${req.params.id} deleted.`, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error deleting message', 500, e)
        })
    }
)

module.exports = router;