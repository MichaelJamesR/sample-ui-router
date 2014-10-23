(function ()
{
  var module = angular.module('myApp', ['ui.router']);

  module.config(function($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.otherwise('');
    
    $stateProvider
    .state('', {
      url: ''
    })
    
    .state('home', {
      url: "/home",
      templateUrl: "app/features/home/home.tpl.html"
    })
    
    .state('home.list', {
      url: "/list",
      templateUrl: "app/features/home/list/list.tpl.html",
      controller: function($scope) 
      {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    
    .state('about', {
      url: "/about",
      templateUrl: "app/features/about/about.tpl.html"
    })
    
    .state('about.details', {
      url: "/details",
      templateUrl: "app/features/about/details/details.tpl.html",
      controller: function($scope) 
      {
        $scope.details = {
          Name: 'Sample App',
          Author: 'me',
          Version: '0.0.1'
        };
      }
    });
    
  });

})();
