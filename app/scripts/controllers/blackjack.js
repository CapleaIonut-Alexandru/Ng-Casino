(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
  		.controller('blackjackCtrl',blackjackCtrl);
  		blackjackCtrl.$inject=['blackjackSvc','jetoaneSvc','toastr','pachetSvc','$timeout','$uibModal'];
  		function blackjackCtrl(blackjackSvc,jetoaneSvc,toastr,pachetSvc,$timeout,$uibModal) {
    		var vm = this;
			vm.dealerScore = null;
	        vm.playerScore = null;;
			vm.loaded = false;
			vm.jetoane = new jetoaneSvc.Jetoane();

			vm.modal_depunere = function(){
				console.log('open modal');
	  			$uibModal.open({
	  				animation:true,
	  				templateUrl:'/views/modal-depunere.html',	  
	  				controller:'depunereCtrl',
	  				controlleAs:'vm',				
	  			});
	  		};

			vm.joaca_blackjack = function(){
				
				$timeout(function(){
					vm.loaded = true;
					newHand();
					vm.loaded = false;
				},2000);
				vm.loaded = true;
			};
			vm.hit = function(){
				vm.playerCards.push(new blackjackSvc.Blackjack().trage_carte());
				vm.playerScore = new blackjackSvc.Blackjack().totalValCarti(vm.playerCards);

				$timeout(function(){

		          	if (vm.playerScore > 21){
		          		vm.playerScore = new blackjackSvc.Blackjack().totalValCarti(vm.playerCards);
		          		new Audio('sounds/lose.wav').play();
		          		toastr.error ('Ai pierdut!',{
				 			closeButton: true,
					 		onHidden: null,
		    				onShown: null,
		    				onTap: null,
		    				progressBar: true,
		    				tapToDismiss: true,
		    				timeOut: 3000,
				 		});
		          	}

	        	},1000);
			};

			vm.stay = function(){
				while(vm.dealerScore<21){
					vm.dealerCards.push(new blackjackSvc.Blackjack().trage_carte());
					vm.dealerScore = new blackjackSvc.Blackjack().totalValCarti(vm.dealerCards);
				}

			
				if((vm.dealerScore>21 || vm.playerScore>vm.dealerScore)&&vm.playerScore<=21){
					vm.dealerScore = new blackjackSvc.Blackjack().totalValCarti(vm.dealerCards);
					new Audio('sounds/win.wav').play();
					toastr.success('Ai castigat!',{
						closeButton: true,
					 	onHidden: null,
		    			onShown: null,
		    			onTap: null,
		    			progressBar: true,
		    			tapToDismiss: true,
		    			timeOut: 3000,
					});
										
				}else{
					if(vm.playerScore === vm.dealerScore){
						vm.playerScore = new blackjackSvc.Blackjack().totalValCarti(vm.playerCards);
						toastr.info('Egal!',{
							closeButton: true,
						 	onHidden: null,
			    			onShown: null,
			    			onTap: null,
			    			progressBar: true,
			    			tapToDismiss: true,
			    			timeOut: 3000,
						});
						
						
					}else if(vm.dealerScore>vm.playerScore){
						vm.playerScore = new blackjackSvc.Blackjack().totalValCarti(vm.playerCards);
						vm.suma_in_casa -=vm.suma_pariata;
						new Audio('sounds/lose.wav').play();
						toastr.error ('Ai pierdut!',{
				 			closeButton: true,
					 		onHidden: null,
		    				onShown: null,
		    				onTap: null,
		    				progressBar: true,
		    				tapToDismiss: true,
		    				timeOut: 3000,
				 		});
					}
				}
			};

			function newHand(){
				vm.playerCards = [];
				vm.dealerCards = [];
		    	$timeout(function(){
		    		vm.dealerCards.push(new blackjackSvc.Blackjack().trage_carte());
		    		vm.dealerScore = new blackjackSvc.Blackjack().totalValCarti(vm.dealerCards);
		    	},2000);

		    	$timeout(function(){
		    		vm.dealerCards.push(new blackjackSvc.Blackjack().trage_carte());
		    		
		    	},4000);
		    	
		    	$timeout(function(){
		    		vm.playerCards.push(new blackjackSvc.Blackjack().trage_carte());
		    		vm.playerScore = new blackjackSvc.Blackjack().totalValCarti(vm.playerCards);
		    	},1000);   

		    	$timeout(function(){
		    		vm.playerCards.push(new blackjackSvc.Blackjack().trage_carte());
		    		vm.playerScore = new blackjackSvc.Blackjack().totalValCarti(vm.playerCards);
		    	},3000);	        
	    	}
  		}
  		angular
			.module('angularCasinoApp')
			.controller('depunereCtrl',depunereCtrl);
			depunereCtrl.$inject = ['$scope','$uibModalInstance'];
			function depunereCtrl($scope,$uibModalInstance){
				$scope.user_account = [{
				    firstName: '',
				    lastName: '',
				    nickName:'',
				    suma_depusa:0
				}];
				$scope.user = $scope.user_account;
				$scope.close = function(){
				  	$uibModalInstance.dismiss('cancel');
				};
				$scope.depunere_suma = function(){
					$scope.suma_totala_depusa +=$scope.suma_depusa;
				};
			}
})();
