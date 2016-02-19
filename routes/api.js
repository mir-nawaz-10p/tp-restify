'use strict';
const authController = require('../controllers/auth');
const userService = require('../services/user');
const api = require('./json').version;

module.exports = (server) => {
	server.post(api + '/users', authController.isAutenticated, userService.save);
	server.get(api + '/users', authController.isAutenticated, userService.getAll);
	server.put(api + '/users/:id', authController.isAutenticated, userService.update);
	server.get(api + '/users/:id', authController.isAutenticated, userService.getById);
	server.del(api + '/users/:id', authController.isAutenticated, userService.deleteById);
};
