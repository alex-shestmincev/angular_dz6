angular.module('dz3').provider('menu',function(){

  this.add = function(name,state){
    console.log('Add' + name + '' + state);
    alert('1');
  }

  this.$get = function(){
    return {
      getitems : function(){
                  return [
                    {
                    'state': 'mainstate',
                    'title': 'Main'
                    }
                  ];
      }
    }
  }

});
