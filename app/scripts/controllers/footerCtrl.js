(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
		.controller('footerCtrl',footerCtrl);
		footerCtrl.$inject=['$scope']; 
		function footerCtrl($scope){

			$scope.map = { center: { latitude: 44.43932, longitude: 26.01168 }, zoom: 17 };
			$scope.marker = {id:0, coords:{latitude: 44.43932, longitude: 26.01168},options:{draggable:false, icon:'favicon.ico'}};
		}
})();