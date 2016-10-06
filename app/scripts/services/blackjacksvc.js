(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
	  	.service('blackjackSvc',['pachetSvc',function (pachetSvc) {
	    	function Blackjack() {

				var pachet = new pachetSvc.Pachet();
				pachet.amesteca(100);
				this.carti = pachet.carti;

				this.totalValCarti = function(x){ 
					var total = 0; 
					var nrAsi = 0;
					for(var i = 0; i < x.length; i++){
						if (x[i].valoare > 11){
							total += 10;
						} 
					    else{
					    	total+=x[i].valoare;
					    }
					    if (x[i].valoare===11){
					    	nrAsi++;
					    } 	   
					}
					
					while(total>21 && nrAsi>0){
						nrAsi--;
						total-=10;
					}		
					return parseFloat(total);
				};

				this.arataCartea = function(x) { 
				    var mana ="";
				    for(var i=0; i<x.length; i++) {
				    	mana =  mana + ":" +x[i].valoare + " " + x[i].denumire + " " + x[i].culori; 
				    }
				    return mana;
				};
				/*        
				this.castigator = function() { 
					
				    var player =   21-this.totalValCarti(playerHand); 
				    var dealer =   21-this.totalValCarti(dealerHand);


				    var result;
				    if((player===dealer) || (player< false && dealer<false)) return result =0;
				    if(player >=false  &&(dealer>player || dealer<false)) return result=1; //player win
				    if(dealer >=false  &&(player>dealer || player<false)) return result=-1; //casa win//
				};*/      

				this.trage_carte = function(){
	      			return this.carti.pop();
				};
			}

			return{
				Blackjack:Blackjack
			};
	  	}]);
})();	
