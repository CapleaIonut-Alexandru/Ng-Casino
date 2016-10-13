(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
		.controller('navbarCtrl',function($scope){
	  		$scope.isCollapsed = true;

	  		$scope.nav = [
	  			{name:'app', title:'Home'},
	      		{name:'app.about', title:'About'},
	      		{name:'app.blackjack', title:'Blackjack'},
	      		{name:'app.razboi', title:'Razboi'}
	    	];
		});
})();