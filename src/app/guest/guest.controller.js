'use strict';

angular.module('dz2')
.controller("GuestCtrl",['$scope','localStorageService',function($scope,localStorageService){
    $scope.guests = localStorageService.get('guests') ? localStorageService.get('guests') : [];

    $scope.clients = localStorageService.get('clients') ? localStorageService.get('clients') : [];

    $scope.new_name = '';



    $scope.addClient = function(idx) {
      var guest_to_clients = $scope.guests[idx];
      $scope.guests.splice(idx, 1);
      $scope.clients.push(guest_to_clients);

      localStorageService.set('guests',$scope.guests);
      localStorageService.set('clients',$scope.clients);
    }

    $scope.removeGuest = function(idx) {
      var guest_to_delete = $scope.guests[idx];

      $scope.guests.splice(idx, 1);

      localStorageService.set('guests',$scope.guests);
    }

    $scope.clientToGuests = function(idx) {
      var client_to_gests = $scope.clients[idx];

      $scope.clients.splice(idx, 1);
      $scope.guests.push(client_to_gests);

      localStorageService.set('guests',$scope.guests);
      localStorageService.set('clients',$scope.clients);
    }

    $scope.newGuest = function() {
      var new_name = $scope.new_name;


      if (new_name.length != 0){
        $scope.guests.push({'name':new_name});
      }

      localStorageService.set('guests',$scope.guests);

      $scope.new_name = '';
    }



}]);
