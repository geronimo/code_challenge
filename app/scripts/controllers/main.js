'use strict';

angular.module('challengeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      {name: "Bar", description: "bar bar bar", color: "blue"},
      {name: "Foo", description: "foo foo foo", color: "red"},
      {name: "Baz", description: "baz baz baz", color: "green"}
    ];
  });
