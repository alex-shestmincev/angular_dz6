'use strict';

angular.module('dz6')
  .config(function($stateProvider,menuProvider) {

    var permissionOnly = ['guest','user','admin'];

    $stateProvider
      .state('other', {
        url: '/other',
        templateUrl: 'app/other/other.html',
        controller: 'OtherCtrl'
      });

    menuProvider.add('Page 2','other', permissionOnly);
  });
