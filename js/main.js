/*//PreLoader

window.onload = function(){
	var contenedor = document.getElementById("container-carga");

	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0.5';
}
// Fin PreLoader*/

$(document).ready(function(){
	//Emergencias
	$(window).scroll(function(){

		var altura = $(window).scrollTop();
		var contenido = $(".emergencias").offset();

		if(altura > 80){
			$("#emergency").removeClass('emergencias');
			$("#emergency").addClass('emergencias-fixed');
		}
		else{
			$("#emergency").removeClass('emergencias-fixed');
			$("#emergency").addClass('emergencias');
		}

	});
	
		

		var width = $(window).resize();

		if( width <= 768){
			$("#fono-imagen").remove();
			$("section#emergency").append('<a href="tel:+56950049869" id="fono-link"><img src="images/emergencias.jpg" alt="emergencias"></a>')
		}
		else if( width > 768){
			$("#fono-link").remove();
			$("section#emergency").append('<img src="images/emergencias.jpg" alt="emergencias" id="fono-imagen">')	
		}
	
	


	// Menu Responsivo 
	$(".submenu").click(function(){
		$(this).children("ul").slideToggle();

		if($("#menu-down").hasClass("fa-chevron-down")){
			
			$("#menu-down").removeClass("fa-chevron-down");
			$("#menu-down").addClass("fa-chevron-up");	
			
		}else{
	
			$("#menu-down").removeClass("fa-chevron-up");
			$("#menu-down").addClass("fa-chevron-down");	
		}

		
		
	})


	$("ul").click(function(p){
		p.stopPropagation();
	})
	
	// Fin Menu Responsivo 

	// Slider
	var slider = $(".slider");
	var siguiente = $(".right span");
	var anterior = $(".left span");

	//Mover ultima imagen al principio
	$(".slider section:last").insertBefore(".slider section:first");
	slider.css("margin-left", "-"+100+"%");

	function moverD(){
		slider.animate({
			marginLeft:"-"+200+"%"
		},700, function(){
			$(".slider section:first").insertAfter(".slider section:last");
			slider.css("margin-left", "-"+100+"%");
		});
	}

	function moverI(){
		slider.animate({
			marginLeft:0
		},700, function(){
			$(".slider section:last").insertBefore(".slider section:first");
			slider.css("margin-left", "-"+100+"%");
		});
	}

	function autoplay(){
		interval = setInterval(function(){
			moverD();
		}, 5000);
	}

	siguiente.click(function() {
		moverD();
		clearInterval(interval);
		autoplay();
	});

	anterior.click(function() {
		moverI();
		clearInterval(interval);
		autoplay();
	});

	autoplay();

	//Fin Slider

/*------------------------------------------*/
    
 // Slider Clientes

	var imgItems2 = $('.slider-clientes li').length; // Numero de Slides
	var imgPos2 = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems2; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider-clientes li').hide(); // Ocultanos todos los slides
	$('.slider-clientes li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 3000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos2 = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider-clientes li').hide(); // Ocultamos todos los slides
		$('.slider-clientes li:nth-child('+ paginationPos2 +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#ff851b'});

		imgPos2 = paginationPos2;

	}

	function nextSlider(){
		if( imgPos2 >= imgItems2){imgPos2 = 1;} 
		else {imgPos2++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos2 +')').css({'color': '#ff851b'});

		$('.slider-clientes li').hide(); // Ocultamos todos los slides
		$('.slider-clientes li:nth-child('+ imgPos2 +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos2 <= 1){imgPos2 = imgItems2;} 
		else {imgPos2--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos2 +')').css({'color': '#ff851b'});

		$('.slider-clientes li').hide(); // Ocultamos todos los slides
		$('.slider-clientes li:nth-child('+ imgPos2 +')').fadeIn(); // Mostramos el Slide seleccionado
	}

	// Fin Slider Clientes

/*-------------------------------------------*/

	// Manejo de imagnes Presentacion
	var image1 = new Image();
	image1.src = "images/animacion-cierra.gif";
	var image2 = new Image();
	image2.src = "images/animacion2.gif";
	var image3 = new Image();
	image3.src = "images/ascensor-close.png";
	var image4 = new Image();
	image4.src = "images/empresa/tablero.jpg";


	$("#presentacion-1").hover(function () {
	  $(this).show().attr('src', image2.src);
	  $(this).delay(2000).show(true).attr('src', image2.src);
	  $("#presentacion-2").delay(2000).show(true).attr('src', image3.src);
	  $("#presentacion-3").delay(2000).show(true).attr('src', image3.src);
	  $("#close-1").after('<img src="images/empresa/tablero.jpg" class="img4" id="fondo-1">')
	  $("#fondo-1").delay(2000).show(true).attr('src', image4.src);

	}, function(){
	    $(this).hide();
	    $(this).delay(2000).show(true).attr('src', image1.src);   

	});

	$("#presentacion-2").hover(function () {
	  $(this).show().attr('src', image2.src);
	  $(this).delay(2000).show(true).attr('src', image2.src);
	  $("#presentacion-1").delay(2000).show(true).attr('src', image3.src);
	  $("#presentacion-3").delay(2000).show(true).attr('src', image3.src);
	  $("#close-2").after('<img src="images/empresa/tablero.jpg" class="img4" id="fondo-2">')
	  $("#fondo-2").delay(2000).show(true).attr('src', image4.src);

	}, function(){
	    $(this).hide();
	    $(this).delay(2000).show(true).attr('src', image1.src);
	
	});

	$("#presentacion-3").hover(function () {
	  $(this).show().attr('src', image2.src);
	  $(this).delay(2000).show(true).attr('src', image2.src);
	  $("#presentacion-1").delay(2000).show(true).attr('src', image3.src);
	  $("#presentacion-2").delay(2000).show(true).attr('src', image3.src);
	  $("#close-3").after('<img src="images/empresa/tablero.jpg" class="img4" id="fondo-3">')
	  $("#fondo-3").delay(2000).show(true).attr('src', image4.src);
	 
	}, function(){
	    $(this).hide();
	    $(this).delay(2000).show(true).attr('src', image1.src);

	});

	// Fin Manejo de imagnes Presentacion

/*	$(".imagen").click(function(e){
	var enlaceImagen = e.target.src;
	var data = $(this).attr("data");
	var lightbox = '<div class="ligthbox">'+
						'<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
						'<div class="btn-close">X</div>'+
					'</div>';

	$("body").append(lightbox)
	$("#zoom_mw").elevateZoom({
		scrollZoom : true,
		cursor: "crosshair",
		zoomWindowOffetx: 15
	});
	$(".btn-close").click(function(){
		$(".ligthbox").remove();
	})

})*/

	$(".galeria-img").click(function(e){
		 var img = e.target.src;
		 var modal = '<div class="modal" id="modal"><img src="'+ img +'" class="modal-img"><div class="modal-boton" id="modal-boton">X</div></div>';
		 $("body").append(modal);
		 $("#modal-boton").click(function(){
		 	$("#modal").remove();
		 })
	});

	$(document).keyup(function(e){
		if(e.which == 27){
			$("#modal").remove();
		}
	})

});


	
	

	