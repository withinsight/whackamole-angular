(function() {
  'use strict';

  angular
    .module('moleApp', [])
    .controller('MoleController', MoleController);

  function MoleController($timeout) {
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
    vm.moleClicked = moleClicked;
    vm.popMole = popMole;
    vm.popMoles = popMoles;

    activate();

    //////////

    function activate() {
      vm.popMoles();
    }

    function moleClicked() {
      vm.score = vm.score + 1;
    }

    function popMole() {
      var randomNum = Math.floor(Math.random() * (9 - 0)) + 0;

      vm.moles[randomNum].show = true;
      $timeout(function() {
        vm.moles[randomNum].show = false;
      }, 2000);
    }

    function popMoles() {
      $timeout(function() {
        vm.popMole();
        vm.popMoles();
      }, 2000);
    }
  }

})();
