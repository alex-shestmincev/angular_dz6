'use strict';

angular.module('dz3.admin', ['ui.router'])
  .config(function ($stateProvider,menuProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });

    //menu.add('Admin Title','admin')
    menuProvider.add('Admin Title','admin');

  });
