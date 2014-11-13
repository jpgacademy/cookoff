'use strict';

angular.module('cookoffApp')
  .controller('MainCtrl', function ($scope, $http, socket, $routeParams) {
    $http.get('/api/priests')
      .success(function(priests) {
        $scope.priests = priests;
      });

    $scope.timer = $routeParams.timer;

    $scope.topThree = function() {
      return _.sortBy($scope.priests, 'vote').slice(-3);
    };

    $scope.nextFour = function() {
      return _.sortBy($scope.priests, 'vote').slice(5, -3);
    };

    $scope.lastFive = function() {
      return _.sortBy($scope.priests, 'vote').slice(0, 5);
    };

    socket.socket.on('priest:save', function() {
      $http.get('/api/priests')
      .success(function(priests) {
        $scope.priests = priests;
      });
    });

  });
