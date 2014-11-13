'use strict';

angular.module('cookoffApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/score', {
        templateUrl: 'app/score/score.html',
        controller: 'ScoreCtrl',
        authenticate: true
      });
  });
