(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
		.directive('loading',function(){
			return{
				restrict:'E',
				templateUrl:'/views/loading.html',
			};
		});
})();	