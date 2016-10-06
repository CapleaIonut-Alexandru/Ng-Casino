(function(){

	'use strict';
	angular
		.module('angularCasinoApp')
	  	.controller('razboiCtrl',razboiCtrl);
		razboiCtrl.$inject=['razboiSvc','jetoaneSvc','toastr','$timeout'];
		function razboiCtrl(razboiSvc,jetoaneSvc,toastr,$timeout){
			var vm = this;
			vm.suma_in_casa = 0;
			vm.suma_pariata = 0;
			vm.depunere = 0;
			vm.pariu = 0;	
			vm.dealer_runde = 0;
			vm.player_runde = 0;
			vm.loaded = false;


			vm.jetoane = new jetoaneSvc.Jetoane();
			
			vm.joaca_razboi = function(){	
				$timeout(function(){
					vm.loaded = true;
					vm.game = new razboiSvc.Razboi();
					var result = vm.game.razboi();
					vm.loaded = false;
				},500);
				vm.loaded = true;

				if(result===1){
					toastr.success('Ai castigat!',{
						closeButton: true,
					 	onHidden: null,
		    			onShown: null,
		    			onTap: null,
		    			progressBar: true,
		    			tapToDismiss: true,
		    			timeOut: 450,
					});
				}else{
					toastr.error ('Ai pierdut!',{
				 		closeButton: true,
					 	onHidden: null,
		    			onShown: null,
		    			onTap: null,
		    			progressBar: true,
		    			tapToDismiss: true,
		    			timeOut: 450,
				 	});
				}
		 	};
		 	vm.depune = function(){
				vm.suma_in_casa +=vm.depunere;
			};
			vm.pariaza = function(){
				vm.suma_pariata +=vm.pariu;
			};
		}
})();
