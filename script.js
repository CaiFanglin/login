var app = angular.module('loginApp',[]);
app.controller('loginCtrl',function($scope){

	$scope.user={
		email:"523252463@qq.com",
		password:"523252463",
		checkbox:false
	};

	console.log($scope);
});
app.controller('titleCtrl',function($scope){
	$scope.title="BootStrap&&AngularJS";
})