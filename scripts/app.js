(function () {


	var app = angular.module('myAngApp', ['ngRoute']);

	app.config(['$routeProvider',function($routeProvider) {

		var viewBase = '/templates/';

		$routeProvider
			.when('/', {redirectTo: '/home'})

			.when('/home', {
				controller : 'homeController',
				templateUrl: viewBase + 'home.html',
				controllerAs: 'vm',
				title: 'My Angular Play Ground'
			})
			.when('/hotelSearch', {
				controller : 'hotelController',
				templateUrl: viewBase + 'hotelSearch.html',
				controllerAs: 'vm',
				title: 'Hotel Search'
			})
			.when('/motorSavings', {
				controller : 'motorSavings',
				templateUrl: viewBase + 'motorSavings.html',
				controllerAs: 'vm',
				title: 'Motor Savings Calculator'
			})
			.otherwise({redirectTo: '/'});
	}])


})();