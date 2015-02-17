'use strict';

angular.module('dz3', [ 'ui.router','permission'])
  .config(function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
  });
