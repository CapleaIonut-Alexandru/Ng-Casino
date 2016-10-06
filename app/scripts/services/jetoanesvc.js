(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
		.service('jetoaneSvc',['$cookies',function ($cookies) {
		    var totalJetoane = [
				{id:1, valoare:10, 	chips:'images/chips/10.png'},
				{id:2, valoare:20, 	chips:'images/chips/20.png'},
				{id:3, valoare:50, 	chips:'images/chips/50.png'},
				{id:4, valoare:100,	chips:'images/chips/100.png'},
			];
			function Jetoane(){
				this.jetoane = totalJetoane;
				this.cart = [];
				this.pariu = 0;
				this.depunere = 0;
				this.suma_in_casa = 0;
				this.suma_pariata = 0;

				this.depune = function(){
					this.suma_in_casa +=this.depunere;
				};

				this.pariaza = function(){
					this.suma_pariata +=this.pariu;
				};

				if(!angular.isUndefined($cookies.get('pariu'))){
			  		this.pariu = parseFloat($cookies.get('pariu'));
				}
				if (!angular.isUndefined($cookies.get('cart'))) {
				 	this.cart =  $cookies.getObject('cart');
				}

				this.addJetoane = function(jeton){
					if(this.cart.length ===0){
						jeton.count = 1;
						this.cart.push(jeton);
					}else{
						var repeat = false;
						for(var i=0; i<this.cart.length; i++){
							if(this.cart[i].id === jeton.id){
								repeat = true;
								this.cart[i].count +=1;
							}
						}
						if(!repeat){
							jeton.count = 1;
							this.cart.push(jeton);
						}
					}
					var expireDate = new Date();
		      		expireDate.setDate(expireDate.getDate() + 1);
				 	$cookies.putObject('cart', this.cart,  {'expires': expireDate});
				 	this.cart = $cookies.getObject('cart');
					this.pariu +=parseFloat(jeton.valoare);
					$cookies.put('pariu', this.pariu,  {'expires': expireDate});
				};
				
				this.removeJeton = function(jeton){
					if(jeton.count >1){
						jeton.count -=1;
						var expireDate = new Date();
						expireDate.setDate(expireDate.getDate() + 1);
				     	$cookies.putObject('cart', this.cart, {'expires': expireDate});
		 			   	this.cart = $cookies.getObject('cart');
					}else if(jeton.count ===1){
						var index = this.cart.indexOf(jeton);
						this.cart.splice(index,1);
						expireDate = new Date();
		       			expireDate.setDate(expireDate.getDate() + 1);
		 			 	$cookies.putObject('cart', this.cart, {'expires': expireDate});
						this.cart = $cookies.getObject('cart');
					}

					this.pariu -=parseFloat(jeton.valoare);
					$cookies.put('pariu', this.pariu,  {'expires': expireDate});
				};
			}	

			return{
				Jetoane:Jetoane

			};
		}]);
})();