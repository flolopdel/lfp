
//LIGA
var moduloLiga = angular.module('appLiga', ['ngRoute','moduloDialog','ui.bootstrap','dialogs.main','dialogs.default-translations','pascalprecht.translate']);
moduloLiga.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "templates/liga/main.html",
    controller : "dialogServiceTest"
	})
	.otherwise({ reditrectTo : "/" });
});
moduloLiga.factory('factoryPlayer', function($http) {

	var mainInfo = $http.get('http://localhost/lfp/js/jsonp.json').success(function(response) {
		//localStorage.setItem('json', JSON.stringify(response));
   		//console.log(localStorage);
        return response;
    });
    var factory = {}; // define factory object

    factory.getMainInfo = function() { // define method on factory object

        return mainInfo; // returning data that was pulled in $http call

    };

    return factory;

  });