'use strict';

var _ = require('lodash');
var Priest = require('./priest.model');

// Get list of priests
exports.index = function(req, res) {
  Priest.find(function (err, priests) {
    if(err) { return handleError(res, err); }
    return res.json(200, priests);
  });
};

// Get a single priest
exports.show = function(req, res) {
  Priest.findById(req.params.id, function (err, priest) {
    if(err) { return handleError(res, err); }
    if(!priest) { return res.send(404); }
    return res.json(priest);
  });
};

// Creates a new priest in the DB.
exports.create = function(req, res) {
  Priest.create(req.body, function(err, priest) {
    if(err) { return handleError(res, err); }
    return res.json(201, priest);
  });
};

// Updates an existing priest in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Priest.findById(req.params.id, function (err, priest) {
    if (err) { return handleError(res, err); }
    if(!priest) { return res.send(404); }
    var updated = _.merge(priest, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, priest);
    });
  });
};

// Deletes a priest from the DB.
exports.destroy = function(req, res) {
  Priest.findById(req.params.id, function (err, priest) {
    if(err) { return handleError(res, err); }
    if(!priest) { return res.send(404); }
    priest.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}