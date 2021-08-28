// External modules
const express = require('express');
const router = express.Router();

// Internal modules
const response = require('../../network/response');
const controller = require('./controller');

router.get('/:userId', function (req, res) {
    controller.getChatsById(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error getting chats', 500, e)
        })
    }
)

router.post('/', function(req, res) {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error creating chat', 500, e);
        })
    }
)

router.delete('/:id', function (req, res) {
    controller.deleteChat(req.params.id)
        .then((data) => {
            response.success(req, res, `Chat ${req.params.id} deleted.`, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error deleting chat', 500, e)
        })
    }
)

module.exports = router;