(function () {

	angular.module('myAngApp')
	.controller('hotelController', ['$scope', "Api",function($scope, Api){

		var vm = this;
		vm.data = [];

		var url = 'https://raw.githubusercontent.com/jebinson/myAngularPG/master/data/hotelData.json';

		Api.Get(url).then(function(response){
			vm.data = response;
		})

	}]);
	
})();