'use strict';
const User = require('../models/Users');

module.exports = {
  save,
  getAll,
  update,
  getById,
  deleteById,
};

function save(req, res) {
	var newUser = req.body;
	newUser.created_at = Date.now();
	newUser.updated_at = Date.now();
	var user = new User(newUser);
	user.save()
	.then(function(doc){
	   res.send(doc);
	})
	.catch(function(err) {
		res.send(err);
	});
};

function getAll(req, res) {
	User.find()
	.then(function(doc){
		res.send(doc);
	})
	.catch(function(err){
		res.send(err);
	});
};

function update(req, res) {
	var query = {_id: req.params.id};
	var update = req.body;
	update.updated_at = Date.now();
	User.findOneAndUpdate(query, update)
	.then(function(doc){
		res.send(doc);
	})
	.catch(function(err){
		res.send(err);
	});
};

function getById(req, res) {
	var query = {_id: req.params.id};
	User.findOne(query)
	.then(function(doc){
		res.send(doc);
	})
	.catch(function(err){
		res.send(err);
	});
};

function deleteById(req, res) {
	var query = {_id: req.params.id};
	User.find(query).remove()
	.then(function(doc){
		res.send(doc);
	})
	.catch(function(err){
		res.send(err);
	});
};
