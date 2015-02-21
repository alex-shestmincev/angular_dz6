angular.module('dz6').factory('dirtyService',function($q,$state){

  var dirty = false;


  function dirtyStateOn(){
    dirty = true;
    return true;
  }

  function dirtyStateOff(){
    dirty = false;
    return true;
  }

  function getDirty(){
    return dirty;
  }

  function saveState(event, toState, toParams, fromState, fromParams){
    var data = {
      toState : toState.name,
      toParams : toParams,
      fromState : fromState.name,
      fromParams : fromParams
    };

    localStorage.setItem('savedState',JSON.stringify(data));
    return ;
  }

  function getSavedState(){
    return JSON.parse(localStorage.getItem('savedState'));
  }

  function goOn(){
    dirtyStateOff();
    var savedState = getSavedState();

    $state.go(savedState.toState, savedState.toParams);
  }

  return {
    dirtyStateOn : dirtyStateOn,
    dirtyStateOff : dirtyStateOff,
    getDirty : getDirty,
    saveState: saveState,
    goOn: goOn

  }

});
