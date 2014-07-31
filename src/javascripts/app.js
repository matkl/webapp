angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.services',
  'app.filters',
  'app.directives'
  ])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  });
