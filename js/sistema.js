$(document).ready(function(){
	$("#btn_menu").click(function(){
			$("#btn_menu").css("display","none");
			$("#fondos").css("display","block");
			$("#menu").css("display","block");
			$('.icon-twitter').addClass('color-blanco');
			$('.icon-youtube').addClass('color-blanco');
			$('.btn-social').addClass('pintar-blanco');
			$('.btn-contactanos').addClass('pintar-blanco');
	});	
	$("#btn_menu_2").click(function(){
			$("#btn_menu_2").css("display","none");
			$(".menu_1").addClass("visible");
	});	
	
});

