'use strict';

angular.module('dz6')
  .config(function($stateProvider,menuProvider) {

    var permissionOnly = ['user','admin'];

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    menuProvider.add(['Main'],['main'],permissionOnly);
  });
