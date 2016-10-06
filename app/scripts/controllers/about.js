(function(){

	'use strict';
	angular
		.module('angularCasinoApp')
  		.controller('aboutCtrl',aboutCtrl);
  		aboutCtrl.$inject = ['$scope'];
  		function aboutCtrl ($scope) {
  			$scope.oneAtATime = true;
  			$scope.myInterval = 3000;
  			$scope.active = 0;
  			$scope.noWrapSlides = false;


  			$scope.imi_place = [
  				{image:'images/svg/inima.svg',titlu:'Iubesc'},
  				{image:'images/svg/familie.svg',titlu:'Familia' ,descriere:'familia & prietenii'},
  				{image:'images/svg/caine.svg', titlu:'Animalele',descriere:'buldogii francezi'},
  				{image:'images/svg/minge.svg', titlu:'Sport', descriere:'fotbal,tenis,etc'},
  				{image:'images/svg/cheia-sol.svg', titlu:'Muzica' ,descriere:'rap'},
  				{image:'images/svg/controller.svg',  titlu:'Jocuri', descriere:'astept fifa 17:D'},
  				{image:'images/svg/myself.svg', titlu:'Despre mine', descriere:'Uneori pana si eu ma iubesc'},
  			];

  			$scope.rowClass = function(place, index){
	         	if(index == 0){
	             	return place.titlu;
	         	}
        		return '';
    		};

  			$scope.imi_displace = [
  				{image:'images/svg/craniu.svg',titlu:'Urasc'},
  				{image:'images/svg/cravata.svg', titlu:'Politica', descriere:'te rog...'},
  				{image:'images/svg/birou.svg', titlu:'Rutina', descriere:'descriere'},
  				{image:'images/svg/birou.svg', titlu:'Punctualitate', descriere:'oamenii care intarzie'},
  				{image:'images/svg/minge.svg', titlu:'Wordpress', descriere:'prefer sa scriu de la 0 cod'},
  				{image:'images/svg/caine.svg', titlu:'Jocuri', descriere:'descriere'},
  				{image:'images/svg/myself.svg', titlu:'Despre mine', descriere:'Uneori pana si eu ma urasc.'},
  			];

  			$scope.class_displace = function(displace,index){
  				if(index==0){
  					return displace.titlu;
  				}
  				return '';
  			};

		  	$scope.limbaje = [
		  		{
		  			name:'Markup',
		  			limbaje_programare:[
		  				{
							name: 'HTML',
							description: 'HTML is a computer language devised to allow website creation. These websites can then be viewed by anyone else connected to the Internet. It is relatively easy to learn, with the basics being accessible to most people in one sitting; and quite powerful in what it allows you to create. It is constantly undergoing revision and evolution to meet the demands and requirements of the growing Internet audience under the direction of the » W3C, the organisation charged with designing and maintaining the language.',
							image:'images/limbaje/html.png',
						},
						{	
							name: 'CSS',
							description: "CSS is a style language that defines layout of HTML documents. For example, CSS covers fonts, colours, margins, lines, height, width, background images, advanced positions and many other things. Just wait and see!.",
							image:'images/limbaje/css.png',
						},
						{
							name: 'Bootstrap',
							description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
							image:'images/limbaje/bootstrap.png',
						},
		  			]
		  		},
		  		{
		  			name:'JavaScript',
		  			limbaje_programare:[
		  				{
				
							name: 'AngularJs',
							description: 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.',
							image:'images/limbaje/angular.png',	
						},	
									
						{
							name: 'YoGenerator',
							description:'Yeoman helps you to kickstart new projects, prescribing best practices and tools to help you stay productive.To do so, we provide a generator ecosystem. A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts.',
							image:'images/limbaje/yeoman.png',
			
						},	
						{	
						
							name: 'Javascript',
							description: 'JavaScript is the programming language of HTML and the Web.',
							image:'images/limbaje/javascript.png',
						
						},
						{
							name: 'NodeJs',
							description: "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices",
							image:'',
						},
		  			]
		  		},
		  	]
  		}
})();
