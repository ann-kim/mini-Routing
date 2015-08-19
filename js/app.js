var app = angular.module('miniRouting', ['ngRoute']);

app.config(['$routeProvider',
	function(router) {
		router
			.when ('/', {
				templateUrl: 'js/Home/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.when ('/settings', {
				templateUrl: 'js/Settings/settingsTmpl.html',
				controller: 'settingsCtrl'
			})
			.when ('/products/:id', {
				templateUrl: 'js/Products/productTmpl.html',
				controller: 'productsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})
	}]);



