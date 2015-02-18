'use strict';

angular.module('dz5', [ 'ui.router','permission'])
  .config(function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
  });
