'use strict';

angular.module('dz6')
  .config(function ($stateProvider,menuProvider) {

    var permissionOnly = ['guest'];

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        params: {'logout':false}
      });

    menuProvider.add('Login','login', permissionOnly);

  }).run(function($rootScope,$state,loginService){

    $rootScope.$on('$changeStateError',function(){
      loginService.logOut();
      $state.go('login');
    });

  });

