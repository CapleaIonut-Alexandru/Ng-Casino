(function(){

	'use strict';
	angular
		.module('angularCasinoApp')
	  	.service('pachetSvc',['carteSvc', function (carteSvc) {
	    	
			function Pachet() {
				this.carti = new carteSvc.Carte().initializarePachet();

				/* ---SAU---
				for(var i in culori) {      
			        var culoare = culori[i];

			        for(var j in simboluri) {  
			            var simbol = simboluri[j];
			            var carte = new carteSvc.Carte(culoare,simbol); 
			            this.carti.push(carte);
			        }
			    }*/
			    /*
			    culori.forEach(function(culoare){
			    	simboluri.forEach(function(simbol){
			    		var carte = new carteSvc.Carte(culoare,simbol);
			    		pachet.carti.push(carte);
			    	})
			    });*/

		    	this.amesteca = function(nrPermutari) {
					for (var  i = 0; i<nrPermutari; i++) { // sa stie sa amestece un pachet
					    var index1 = Math.floor(Math.random() * this.carti.length); 
					    var index2 = Math.floor(Math.random() * this.carti.length); 
					    var element1 = this.carti[index1];  
					    var element2 = this.carti[index2];  
					    this.carti[index1] = element2;
					    this.carti[index2] = element1;          
					}
				};	 
			}
	  		return {
	  			Pachet:Pachet	   
			};
	  }]);
})();