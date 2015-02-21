'use strict';

angular.module('dz6')
  .controller('MenuCtrl', function ($scope,menu,loginService,$rootScope,dirtyService) {


    var userRole = loginService.getRole();

    var menuItems = menu.getitemsByRole(userRole);


    function ShowNotice(){

    }

    $rootScope.menuitems = menuItems;
    $rootScope.userRole = userRole;
    $rootScope.DirtyStateOn = function(){
      dirtyService.dirtyStateOn();
    }
    $rootScope.DirtyStateOff = function(){
      dirtyService.dirtyStateOff();
    }



  });


angular.module('dz6').controller('ModalDemoCtrl', function ($scope, $rootScope, $modal, $log) {

  $rootScope.openModal = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };
});


angular.module('dz6').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, dirtyService) {

  $scope.ok = function () {
    dirtyService.goOn();
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
