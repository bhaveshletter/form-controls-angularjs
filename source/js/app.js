'use strict';

/* App Module */

var app = angular.module('exploreFormControls', [
  'App',
  'ngRoute',
  'ui.bootstrap',
  'ui.select',
  'ngSanitize',
  'ngMessages'
]);

app.config(['$routeProvider',  
  function($routeProvider){
    $routeProvider.
      otherwise({
        templateUrl: 'views/home.html',
        controller: 'ModalDemoCtrl'
      });
  }]);
