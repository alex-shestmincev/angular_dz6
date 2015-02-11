'use strict';

angular.module('dz3')
  .controller("AdminCtrl",['$scope','$state','localStorageService', function ($scope,$state,localStorageService) {
    if (localStorageService.get('username') !== 'admin'){
      $state.go('login',{logout:true});
    }
  }]);
