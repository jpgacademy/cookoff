'use strict';

angular.module('cookoffApp')
  .controller('ScoreCtrl', function ($scope, $http) {
    $http.get('/api/priests')
      .success(function(priests) {
        $scope.priests = priests;
      });

    $scope.change = function(priest, $event) {
    	if ($event.keyCode === 13) {
    		$scope.add(priest);
    	}
    };

    $scope.add = function(priest) {
      if (angular.isNumber(priest.add)) {
        priest.vote = priest.vote + priest.add;
        $http.put('/api/priests/'+priest._id, priest);
      }
    	priest.add = '';
    };
  });
