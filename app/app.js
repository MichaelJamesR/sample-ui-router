(function ()
{
  var module = angular.module('myApp', ['ui.router']);

  module.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams)
  {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }]);

  module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider
      .otherwise('/');
    
    $stateProvider
      .state('/', {
        templateUrl: "app/app.tpl.html"
      })
      
      .state('nested-views-1', {
        url: "/nested-views-1",
        templateUrl: "app/demos/nested-views-1/nested-views-1.tpl.html"
      })
      
      .state('nested-views-1.home', {
        url: "/home",
        templateUrl: "app/demos/nested-views-1/home/home.tpl.html"
      })
      
      .state('nested-views-1.home.list', {
        url: "/list",
        templateUrl: "app/demos/nested-views-1/home/list/list.tpl.html",
        controller: function($scope) 
        {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      
      .state('nested-views-1.about', {
        url: "/about",
        templateUrl: "app/demos/nested-views-1/about/about.tpl.html"
      })
      
      .state('nested-views-1.about.details', {
        url: "/details",
        templateUrl: "app/demos/nested-views-1/about/details/details.tpl.html",
        controller: function($scope) 
        {
          $scope.details = {
            Name: 'Sample App',
            Author: 'me',
            Version: '0.0.1'
          };
        }
      });
    
  }]);

})();
