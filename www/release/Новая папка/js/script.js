'use strict';
$(document).ready(function() {
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$("#menu").toggleClass('menu');
		if($("#menu").attr('class')==""){
			 $("#menu").addClass("menuout");			
			 setTimeout(function(){
				 $("#menu").removeClass("menuout");
			 },250); 
		};
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


