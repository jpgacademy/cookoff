/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Priest = require('../api/priest/priest.model');


Priest.find({}).remove(function() {
  Priest.create({
    name : 'Fr. Arceneaux',
    vote: 176,
    picId: 1,
    image: 'fr arceneaux.png'
  }, {
    name : 'Fr. Bordelon',
    vote: 1060,
    picId: 2,
    image: 'fr bordelon.png'
  }, {
    name : 'Fr. Brady',
    vote: 511,
    picId: 3,
    image: 'fr brady.png'
  }, {
    name : 'Fr. Broussard',
    vote: 258,
    picId: 4,
    image: 'fr broussard.png'
  }, {
    name : 'Fr. Brown',
    vote: 527,
    picId: 5,
    image: 'fr brown.png'
  }, {
    name : 'Fr. Halphen',
    vote: 84,
    picId: 6,
    image: 'fr halphen.jpg'
  }, {
    name : 'Fr. McIntyre',
    vote: 1711,
    picId: 7,
    image: 'fr mcintyre.png'
  }, {
    name : 'Fr. Melancon',
    vote: 658,
    picId: 8,
    image: 'fr melancon.png'
  }, {
    name : 'Fr. Metrejean',
    vote: 719,
    picId: 9,
    image: 'fr metrejean.png'
  }, {
    name : 'Fr. Pettit',
    vote: 119,
    picId: 10,
    image: 'fr petit.png'
  }, {
    name : 'Fr. Sibley',
    vote: 867,
    picId: 11,
    image: 'fr sibley.png'
  }, {
    name : 'JPG Seminarians',
    vote: 26,
    picId: 12,
    image: 'sems.png'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'aconque@jpgacademy.org',
    password: 'thomas'
  }, function() {
      console.log('finished populating users');
    }
  );
});