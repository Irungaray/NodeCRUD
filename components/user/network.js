// External modules
const express = require('express');
const router = express.Router();

// Internal modules
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    controller.getUsers()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error getting users', 500, e)
        })
    }
)

router.get('/:id', function (req, res) {
    controller.getUserById(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error retrieving message', 500, e);
        })
    }
)

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error creating user', 500, e);
        })
    }
)

router.patch('/:id', function (req, res) {
    controller.updateUser(req.params.id, req.body.name)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error updating user', 500, e);
        })
    }
)

router.delete('/:id', function (req, res) {
    controller.deleteUser(req.params.id)
        .then((data) => {
            response.success(req, res, `User ${req.params.id} deleted.`, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error deleting user', 500, e)
        })
    }
)

module.exports = router;