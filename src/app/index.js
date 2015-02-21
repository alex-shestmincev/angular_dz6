'use strict';

angular.module('dz6', [ 'ui.router','ui.bootstrap'])
  .config(function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
  }).run(function ($rootScope, $state, dirtyService) {
    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {

        if (dirtyService.getDirty() === true){

          $rootScope.openModal('sm');
          dirtyService.saveState(event, toState, toParams, fromState, fromParams);
          event.preventDefault();
        }

        //
      });
  });
