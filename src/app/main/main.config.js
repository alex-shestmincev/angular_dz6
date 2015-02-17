'use strict';

angular.module('dz3')
  .config(function($stateProvider,menuProvider) {

    var permissionOnly = ['user','admin'];

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });

    menuProvider.add('Main','main',permissionOnly);
  });
