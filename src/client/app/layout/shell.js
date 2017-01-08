(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('Shell', Shell);

  Shell.$inject = ['$timeout', 'config', 'logger'];

  function Shell($timeout, config, logger) {
    var vm = this;
    vm.title = config.appTitle;
    vm.showSplash = true;

    active();

    function active() {
      logger.success(config.appTitle + ' loaded!', null);
      hideSlash();
    }

    function hideSlash() {
      $timeout(function () {
        vm.showSplash = false;
      }, 1000);
    }

  }

}());