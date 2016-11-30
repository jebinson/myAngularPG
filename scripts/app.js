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
			title: 'Home'
		})
		.when('/hotelSearch', {
			controller : 'hotelController',
			templateUrl: viewBase + 'hotelSearch.html',
			controllerAs: 'vm',
			title: 'Café search'
		})
		.when('/motorSavings', {
			controller : 'motorSavings',
			templateUrl: viewBase + 'motorSavings.html',
			controllerAs: 'vm',
			title: 'Motor savings'
		})
		.when('/kendoPG', {
			controller : 'kendoCtrl',
			templateUrl: viewBase + 'kendoPG.html',
			controllerAs: 'vm',
			title: 'Kendo playground'
		})
		.otherwise({redirectTo: '/'});
	}]);

    app.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

            if (current.hasOwnProperty('$$route')) {

                $rootScope.title = current.$$route.title;
            }
        });
    }]);

})();