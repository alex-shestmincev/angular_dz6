'use strict';

angular.module('dz5')
  .config(function($stateProvider,menuProvider) {

    var permissionOnly = ['admin'];

    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });

    menuProvider.add('Admin','admin',permissionOnly);
  });

