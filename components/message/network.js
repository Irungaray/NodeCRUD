// External modules
const express = require('express');
const router = express.Router();

// Internal modules
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
        controller.getMessages()
            .then((messageList) => {
                response.success(req, res, messageList, 200);
            })
            .catch(e => {
                response.error(req, res, 'Unexpected Error', 500, e)
            })
    }
)

router.post('/', function (req, res) {
        controller.addMessage(req.body.user, req.body.message)
            .then((fullMessage) => {
                response.success(req, res, fullMessage, 201);
            })
            .catch((e) => {
                // response.error(req, res, 'Unexpected error', 500, e);
                console.log(e);
            })
    }
)

router.delete('/', function (req, res) {
        // res.send('Message ' + req.body.text + ' deleted');
    }
)

module.exports = router;