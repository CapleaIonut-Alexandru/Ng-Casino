(function(){
	'use strict';

	angular
	  	.module('angularCasinoApp')
	  	.config(config);
	  	function config($stateProvider,$urlRouterProvider,uiGmapGoogleMapApiProvider){
		
		 	uiGmapGoogleMapApiProvider.configure({
		  		romania:true,
        		v: '3.20', //defaults to latest 3.X anyhow
        		libraries: 'weather,geometry,visualization'

		  	});
		  	$stateProvider
			  	.state('app',{
			  		url:'/',
			  		views:{
			  			'navbar':{
			  				templateUrl:'/views/navbar.html',
			  				controller:'navbarCtrl',
			  				controllerAs:'vm'
			  			},
			  			'content':{
			  				templateUrl:'/views/main.html',
			  				controller:'mainCtrl',
			  				data:{activeTab:'/'}
			  			},
			  			'footer':{
			  				templateUrl:'/views/footer.html',
			  				controller:'footerCtrl',
			  				controllerAs:'vm'
			  			}
			  		}
			  	})
			  	.state('app.about',{
			  		url:'about',
			  		views:{
			  			'content@':{
			  				templateUrl:'/views/about.html',
					  		controller:'aboutCtrl',
					  		controllerAs:'vm',
					  		data:{activeTab:'about'}
			  			}
			  		}
			  	})
			  	.state('app.blackjack',{
			  		url:'blackjack',
			  		views:{
			  			'content@':{
			  				templateUrl:'/views/blackjack.html',
					  		controller:'blackjackCtrl',
					  		controllerAs:'vm',
					  		data:{activeTab:'blackjack'}
			  			}
			  		}
			  	})
			  	.state('app.razboi',{
			  		url:'razboi',
			  		views:{
			  			'content@':{
			  				templateUrl:'/views/razboi.html',
					  		controller:'razboiCtrl',
					  		controllerAs:'vm',
					  		data:{activeTab:'razboi'}
			  			}
			  		}
			  	});

			$urlRouterProvider.otherwise('/');
		}
})();