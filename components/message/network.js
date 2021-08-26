// External modules
const express = require('express');
const router = express.Router();

// Internal modules
const response = require('../../network/response');

router.get('/', function (req, res) {
        res.header({
            'custom-header': 'Our personal value'
        })
        response.success(req, res, 'Message list');
    }
)

router.post('/', function (req, res) {
        if (req.query.error == 'ok') {
            response.error(req, res, 'Unexpected error', 500, 'Just a simulation')
        }

        response.success(req, res, 'Message created', 201)
    }
)

router.delete('/', function (req, res) {
        // res.send('Message ' + req.body.text + ' deleted');
    }
)

module.exports = router;