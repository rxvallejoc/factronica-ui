'use strict';

/**
 * @ngdoc function
 * @name factronicaUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the factronicaUiApp
 */
angular.module('factronicaUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.NavigationBar = {
  "projectTitle": "My Website Title",
  "menu": [
    {
      "name": "Comprobantes Electronicos",
      "icon" : "icon-th",
      "url": "/about",
      "subMenu": [
        {
          "name": "Factura",
          "url": "/techStuff"
        },
        {
          "name": "Nota de Debito",
          "url": "/angularJS"
        },
        {
          "name": "Nota de Credito",
          "url": "/html5"
        },
        {
          "name": "Guia de Remision",
          "url": "/javascript"
        },
        {
          "name": "Retencion",
          "url": "/jquery"
        }
      ]
    },
    {
      "name": "Acuerdos",
      "icon" : "icon-copy",
      "url": "/contact",
      "subMenu": [
        {
          "name": "Edicion",
          "url": "/techStuff"
        },
        {
          "name": "Envio",
          "url": "/angularJS"
        },
        {
          "name": "Impresion",
          "url": "/html5"
        }
      ]
    },
    {
      "name": "Reportes",
      "icon" : "icon-signal",
      "url": "/categories",
      "subMenu": [
        {
          "name": "Comprobantes Emitidos",
          "url": "/techStuff"
        }
      ]
    },
    {
      "name": "Administracion",
      "icon" : "icon-gear",
      "url": "/categories",
      "subMenu": [
        {
          "name": "Usuarios",
          "url": "/techStuff"
        },
        {
          "name": "Clientes",
          "url": "/angularJS"
        },
        {
          "name": "Productos",
          "url": "/html5"
        }
      ]
    }
  ]
};
  });
