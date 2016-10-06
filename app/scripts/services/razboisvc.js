(function(){
	'use strict';
	angular
		.module('angularCasinoApp')
	  	.service('razboiSvc', ['pachetSvc',function (pachetSvc) {
	    	function Razboi() {
		
				var pachet = new pachetSvc.Pachet();
				pachet.amesteca(100);
				this.carti = pachet.carti;

				this.carti_player1 = [];
				this.carti_player2 = [];
				this.carti_castigate1 = [];
				this.carti_castigate2 = [];
				this.carti_pe_masa1 = [];
				this.carti_pe_masa2 = [];

				for (var i = 0; i < this.carti.length; i++) {
			        if (i % 2 === 0) { 
			            this.carti_player1.push(this.carti[i]); 
			        }else {
			            this.carti_player2.push(this.carti[i]);
			        }
			    }
			    function mutaCarti(arr1,arr2) {
			            while(arr2.length>0){
			                arr1.push(arr2.splice(0,1)[0]);         
			            }
			        } 	   

				var _self = this;
				
				this.razboi = function(nrCarti) {


					console.log("razboi de ", nrCarti);
					console.log("Carti Player", _self.carti_player1.length);
					console.log("Carti Player", _self.carti_castigate1.length);
					console.log("Carti Casa", _self.carti_player2.length);
					console.log("Carti Casa", _self.carti_castigate2.length);

					if (this.carti_player1.length === 0 && this.carti_castigate1.length === 0 && this.carti_pe_masa1.length === 0) {
						return 1;
					}

					if (this.carti_player2.length === 0 && this.carti_castigate2.length === 0 && this.carti_pe_masa2.length === 0){
						return -1;
					}
					for (i=0;i<nrCarti;i++) {
						if (this.carti_player1.length===0){
							mutaCarti(this.carti_player1,this.carti_castigate1);
						} 
						if (this.carti_player1.length===0){
							break;
						}
						this.carti_pe_masa1.push(this.carti_player1.splice(0,1)[0]);
					}


					for (i=0;i<nrCarti;i++) {
						if (this.carti_player2.length===0) {
							mutaCarti(this.carti_player2,this.carti_castigate2);
						}
						if (this.carti_player2.length===0) {
							break;
						}
						this.carti_pe_masa2.push(this.carti_player2.splice(0,1)[0]);
					}

					var rezultat = this.comparaCarti();

			        // player 1 wins
			        if (rezultat > 0) {
			            mutaCarti(this.carti_castigate1,this.carti_pe_masa1);
			            mutaCarti(this.carti_castigate1,this.carti_pe_masa2);
			            return this.razboi(1);
			        }

			        // player 2 wins
			        if (rezultat < 0) {
			            mutaCarti(this.carti_castigate2,this.carti_pe_masa1);
			            mutaCarti(this.carti_castigate2,this.carti_pe_masa2);
			            return this.razboi(1);
			        }


			        // its a draw
			       	return this.razboi(this.carti_pe_masa1[this.carti_pe_masa1.length-1].valoare);
			    };

			    this.comparaCarti=function() {
			        var ultima_carte1 = this.carti_pe_masa1[this.carti_pe_masa1.length-1];
			        var ultima_carte2 = this.carti_pe_masa2[this.carti_pe_masa2.length-1];
			        if (ultima_carte1.valoare > ultima_carte2.valoare) {
			        	return 1; //casa win
			        }
			        if (ultima_carte2.valoare > ultima_carte1.valoare){
			          	return -1; //player win
			        }
			        return 0;  
			    };
			            
			    var result = this.razboi(1);
			    console.log("Rezultat", result);

			}
			return{
				Razboi:Razboi
			};
	  	}]);
})();