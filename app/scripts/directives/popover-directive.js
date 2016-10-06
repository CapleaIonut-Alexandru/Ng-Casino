(function(){

'use strict';
angular
	.module('angularCasinoApp')
  	.directive('toggle', function () {
	    return{

	        restrict:"A",
	        link: function (scope, element, attrs) {
	           	if(attrs.toggle==="popover"){
	           		$(element).popover();
	           	}
	        }  
	    };
  	});
})();