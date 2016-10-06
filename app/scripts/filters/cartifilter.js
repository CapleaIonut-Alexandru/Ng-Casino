(function(){

	'use strict';
	angular
		.module('angularCasinoApp')
	  	.filter('cartiFilter', function () {
	    	return function (carte) {
	      		return carte.valoare + '_' + carte.culoare + '.jpg';
	    	};
	  	});
})();

