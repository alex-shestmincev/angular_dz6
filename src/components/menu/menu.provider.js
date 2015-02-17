angular.module('dz3').provider('menu',function MenuProvider(){

  var menuItems = [];
  var menuItemsByRole = [];
  var currentRole;

  this.add = function(title,state,permission){

    var newItem = {
      'title' : title,
      'state' : state,
      'permission' : permission
    };

    menuItems.push(newItem);
    console.log(newItem);

  }

  this.$get = function(){
    return {
      getitems : function(){return menuItems; },
      getitemsByRole : function(role){return getItemsByRole(role);}
    }

  }

  // private methods
  function getItemsByRole(role){

    if (menuItemsByRole == false || currentRole != role) {
      menuItemsByRole = [];
      currentRole = role;
        menuItems.forEach(function (item) {
        if (item.permission.indexOf(role) >= 0) {
          menuItemsByRole.push(item);
        }
      });
    }

    return menuItemsByRole;
  }
  // private methods

});

