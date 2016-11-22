var app = angular.module('myAngApp', [])

app.controller('hotelController', ["Api",function(Api){
	Api.Get()

}]);