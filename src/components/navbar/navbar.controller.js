'use strict';

angular.module('dz3')
  .controller('NavbarCtrl', ['$scope','$state','localStorageService', function ($scope,$state,localStorageService) {
    if (!localStorageService.get('username') || localStorageService.get('username').length == 0){
      $state.go('login',{'logout':true});
    }

    $scope.menu_elements = [
      {'state' : 'main', 'title' : 'Страница 1'},
      {'state' : 'other', 'title' : 'Страница 2'},
    ];

    if (localStorageService.get('username') === 'admin'){
      $scope.menu_elements.push({'state' : 'admin', 'title' : 'Админ'});
    }


  }]);
