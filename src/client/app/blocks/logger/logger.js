(function(){
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$log', 'toastr'];

  function logger($log, toastr) {
    var service = {
      showToast : true,
      error: error,
      info: info,
      success: success,
      warning: warning,
      log: $log.log
    };

    //log: Directo a la consola; bypass toastr

    return service;

    function error(message, data, title) {
      toastr.error(message, title);
      $log.error('Error: '+message, data);
    }

    function info(message, data, title) {
      toastr.info(message, title);
      $log.info('Info: '+message, data);
    }

    function success(message, data, title) {
      toastr.success(message, title);
      $log.success('Success: '+message, data);
    }

    function warning(message, data, title) {
      toastr.warning(message, title);
      $log.warning('Warning: '+message, data);
    }

  }

}());