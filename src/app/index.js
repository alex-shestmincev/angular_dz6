'use strict';

angular.module('dz2', [ 'ngResource', 'ui.router','LocalStorageModule'])
  .config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/guest/guest.html',
        controller: 'GuestCtrl'
      });

    localStorageServiceProvider.setPrefix('guests');
    localStorageServiceProvider.setStorageType('sessionStorage');

    $urlRouterProvider.otherwise('/');
  })
;
