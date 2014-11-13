'use strict';

describe('Controller: ScoreCtrl', function () {

  // load the controller's module
  beforeEach(module('cookoffApp'));

  var ScoreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScoreCtrl = $controller('ScoreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
