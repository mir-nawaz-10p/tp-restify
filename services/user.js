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
	var user = new User(req.body);	
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

function update(req, res, next) {
	var query = {_id: req.params.id};
	var update = req.body;
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
