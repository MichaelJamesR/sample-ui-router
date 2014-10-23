(function ()
{
    var module = angular.module('myApp', ['ui.router']);

	module.config(function($stateProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise("/home");
		
		$stateProvider.state('home', {
			url: "/home",
			templateUrl: "features/home/home.tpl.html"
		});
		$stateProvider.state('home.list', {
			url: "/list",
			templateUrl: "features/home/list/list.tpl.html",
			controller: function($scope) 
			{
				$scope.items = ["A", "List", "Of", "Items"];
			}
		});
		$stateProvider.state('about', {
			url: "/about",
			templateUrl: "features/about/about.tpl.html"
		});
		$stateProvider.state('about.details', {
			url: "/details",
			templateUrl: "features/about/details/details.tpl.html",
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
