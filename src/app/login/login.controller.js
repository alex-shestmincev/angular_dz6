'use strict';

angular.module('dz3')
  .controller('LoginCtrl',['$scope','$state','localStorageService', function ($scope,$state,localStorageService) {

    if($state.params.logout === true){
      localStorageService.set('username','')
    }else if(localStorageService.get('username') && localStorageService.get('username').length > 0){
      $state.go('main');
    }

    $scope.username = localStorageService.get('username');

    $scope.Login = function(){
      var username = $scope.username ? $scope.username.trim() : '';
      if (username.length > 0){
        var res=localStorageService.set('username',username);
        if (res){
          $state.go('main');
        }

      }
    }

  }]);
