/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Priest = require('./priest.model');

exports.register = function(socket) {
  Priest.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Priest.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('priest:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('priest:remove', doc);
}