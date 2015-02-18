'use strict';

angular.module('dz5')
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
      })
      .state('main2', {
        url: '/main2',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      })
      .state('main3', {
        url: '/main3',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });

    menuProvider.add(['Main','Main2'],['main','main2'],permissionOnly);
  });
