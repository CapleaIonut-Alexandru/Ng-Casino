(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
	  	.controller('mainCtrl', mainCtrl);
	  	mainCtrl.$inject=['$scope','$uibModal'];
	  	function mainCtrl($scope,$uibModal) {

	  		$scope.informatii_personale = false;
	  	  	$scope.myInterval = 2000;
  			$scope.active = 0;
  			$scope.noWrapSlides = false;

  			

  			$scope.slides = [
				{image: 'images/carte1.jpg'},
				{image: 'images/carte2.jpg'},
				{image: 'images/carte3.jpg'},
				{image: 'images/carte5.jpg'},
			];

			
			$scope.blackjack_reguli = function(){
				console.log('open modal');
	  			$uibModal.open({
	  				animation:true,
	  				templateUrl:'/views/blackjack-reguli.html',	  
	  				controller:'blackjackReguliCtrl',				
	  			});
	  		};
	  		$scope.razboi_reguli = function(){
	  			console.log('open modal');
	  			$uibModal.open({
	  				animation:true,
	  				size:'lg',
	  				templateUrl:'/views/razboi-reguli.html',
	  				controller:'razboiReguliCtrl',
	  			});
	  		};
	  	}
	angular
		.module('angularCasinoApp')
		.controller('blackjackReguliCtrl',blackjackReguliCtrl);
		blackjackReguliCtrl.$inject = ['$scope','$uibModalInstance'];
	  	function blackjackReguliCtrl($scope,$uibModalInstance){
		  	$scope.close = function(){
		  		$uibModalInstance.dismiss('cancel');
		  	};
		  	$scope.imagini_reguli_blackjack = [
		  		{image:'images/cards/12_trefla.jpg',valoare:10},
		  		{image:'images/cards/13_romb.jpg',valoare:10},
		  		{image:'images/cards/14_inima rosie.jpg',valoare:10},
		  		{image:'images/cards/11_inima neagra.jpg',valoare:11, valoare2:1},
		  	];
	  	}
	angular
		.module('angularCasinoApp')
		.controller('razboiReguliCtrl',razboiReguliCtrl);
		razboiReguliCtrl.$inject = ['$scope','$uibModalInstance'];
		function razboiReguliCtrl($scope,$uibModalInstance){

			$scope.close = function(){
				$uibModalInstance.dismiss('cancel');
			};

			$scope.carti_stanga = [
				{image:'images/cards/10_trefla.jpg', image2:'images/win.png'},
				{image:'images/cards/13_inima rosie.jpg',image2:'images/win.png'},
				{image:'images/cards/11_inima rosie.jpg',image2:'images/win.png'},
				
			];
			$scope.carti_dreapta = [
				{image:'images/cards/9_romb.jpg',image2:'images/lose.png'},
				{image:'images/cards/13_inima neagra.jpg',image2:'images/lose.png'},
				{image:'images/cards/11_trefla.jpg',image2:'images/lose.png'},
			];
			
		}
})();
