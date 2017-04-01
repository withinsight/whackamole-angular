(function() {
  'use strict';

  angular
    .module('moleApp', [])
    .controller('MoleController', MoleController);

  function MoleController() {
    var vm = this;

    vm.score = 0;

    vm.moles = [
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false}
    ];

    activate();

    //////////

    function activate() {

    }
  }

})();
