'use strict';

angular.module('dz3')
  .config(function ($stateProvider,menuProvider) {

    var permissionOnly = ['guest'];

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        params: {'logout':false},
        data:{
          //permissions: {
            //only: permissionOnly
          //}
        }
      });

    menuProvider.add('Login','login', permissionOnly);

  }).run(function($rootScope,$state,loginService,Permission){

    Permission
      .defineRole('guest', function () {
        return loginService.isRole('guest') ? true : false;
      })
      .defineRole('user', function () {
        return loginService.isRole('user') ? true : false;
      })
      .defineRole('admin', function () {
        return loginService.isRole('admin') ? true : false;
      });

    $rootScope.$on('$changeStateError',function(){
      loginService.logOut();
      $state.go('login');
    });

  });

