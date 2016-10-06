(function(){


	'use strict';
	angular
		.module('angularCasinoApp')
	  	.service('carteSvc', function () {
	  		function Carte() {
	  			this.initializarePachet = function(){
			    	var culori = ['inima rosie', 'inima neagra', 'trefla', 'romb'];  
			        var simboluri = [                      
			            { valoare:  2, denumire: 'doi'  },    
			            { valoare:  3, denumire: 'trei' },
			            { valoare:  4, denumire: 'patru'},                      
			            { valoare:  5, denumire: 'cinci'},
			            { valoare:  6, denumire: 'sase' },
			            { valoare:  7, denumire: 'sapte'},
			            { valoare:  8, denumire: 'opt'  },
			            { valoare:  9, denumire: 'noua' },
			            { valoare: 10, denumire: 'zece' },
			            { valoare: 11, denumire: 'as'   },
			            { valoare: 12, denumire: 'juva' },
			            { valoare: 13, denumire: 'dama' },
			            { valoare: 14, denumire: 'popa' },
			        ];

			        var carti = [];
					culori.forEach(function(culoare) {
						simboluri.forEach(function(simbol) {
							carti.push({
								simbol: simbol.denumire,
								culoare: culoare,
								valoare: simbol.valoare
							});
						});
					});

					return carti;
				};
			}

	        return{
	           Carte:Carte
	        };         
	  	});
})();
