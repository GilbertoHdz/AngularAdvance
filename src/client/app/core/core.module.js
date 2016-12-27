(function () {
  'use strict';

  angular.module('app.core',[
      //Angular Modules
      //Componentes reutilizables
      'app.data',
      'blocks.exception',
      'blocks.logger',
      'blocks.router',
      //Modulos terceros
      'ui.router'
    ]);

}());