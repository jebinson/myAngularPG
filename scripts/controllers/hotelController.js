(function () {

	angular.module('myAngApp')
	.controller('hotelController', ['$scope', "Api",function($scope, Api){

		var vm = this;
		vm.title = "Hotel Search";
		vm.data = [];

		var url = 'https://raw.githubusercontent.com/jebinson/myAngularPG/master/data/hotelData.json';

		Api.Get(url).then(function(response){
			vm.data = response;
		})

		vm.totalDisplayed = 5;

		vm.loadMore = function () {
			vm.totalDisplayed += 5;
		}

	}]);
	
})();