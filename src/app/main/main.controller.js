'use strict';

angular.module('dz3')
  .controller("MainCtrl", function($scope,menu){

    $scope.menuitems = menu.getitems();

  });
