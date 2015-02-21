'use strict';

angular.module('dz6')
  .config(function($stateProvider,menuProvider) {

    var permissionOnly = ['admin'];

    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });

    menuProvider.add('Admin','admin',permissionOnly);
  });

