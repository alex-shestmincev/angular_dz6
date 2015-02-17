'use strict';

angular.module('dz3', [ 'ui.router','LocalStorageModule','dz3.admin'])
  .config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
        ,params: {'logout':false}
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('other', {
        url: '/other',
        templateUrl: 'app/other/other.html',
        controller: 'OtherCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  });
