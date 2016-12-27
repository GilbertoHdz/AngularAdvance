(function () {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  function toastrConfig(toastr) {
    toastr.option.timeOut = 4000;
    toastr.option.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[NG-Avengers Error]', //Configurar exceptionHandler decorator
    appTitle: 'Avengers Angular Demo',
    version: '1.0.0'
  };

  core.value('config', config);

  core.config(configure);

  function configure($logProvider, $urlRouterProvider, $stateProvider, 
                      routeHelperConfigProvider, exceptionHandlerProvider) {
    
    //Activa o desactiva el debuggin
    if($logProvider.debugEnable){
      $logProvider.debugEnable(true);
    }

    //Configuracion provider de las rutas
    routeHelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
    routeHelperConfigProvider.config.$stateProvider = $stateProvider;
    routeHelperConfigProvider.config.docTitle = 'NG-Avenger: ';

    var resolveAlways = {
      ready: ['dataservice', function (dataservice) {
        return dataservice.ready();
      }]
    };

    routeHelperConfigProvider.config.resolveAlways = resolveAlways;

    //Config exception handler
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    
  }

}());

