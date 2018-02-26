(function($){
	// abrir menu no mobile
	$('.menu').on('click', function(){
		$('#desk-nav.coaches').slideToggle(200); 
	});

	// handle menu
	function menuHeight (){
		const screenH = window.innerHeight;
		const screenW = window.innerWidth;
		const menuH = $('#topo').height();
		const banners = $('#banner-principal');

		if(screenW < 986)
		{
			// adiciona margin top para os banners
			$( banners ).css('margin-top', menuH );
			$('#topo').addClass('c-reduz');
		}
		return;
	}

		

		
		function adicionarAtivo(){
			let path = window.location.pathname;
			if(path === "/depoimentos.html")
			{
				$( "#desk-nav .nav-item:contains('DEPOIMENTOS')" ).addClass('ativo');
			}
			else if(path === "/palestrantes.html"){
				$( "#desk-nav .nav-item:contains('PALESTRANTES')" ).addClass('ativo');
			}
			else if(path === "/contato.html"){
				$( "#desk-nav .nav-item:contains('CONTATO')" ).addClass('ativo');
			}
			else if(path === "/quem-somos.html"){
				$( "#desk-nav .nav-item:contains('QUEM SOMOS')" ).addClass('ativo');
			}
			else if(path === "/coaches.html"){
				$( "#desk-nav .nav-item:contains('COACHES')" ).addClass('ativo');
			}
		}



		function mostrarIrTopo(e){
			console.log(e.currentTarget.scrollY);
			let btn = $('#ir-topo');
			posY = e.currentTarget.scrollY
			if(posY > 800){
				$(btn).fadeIn(200);
			}
			else{
				$(btn).fadeOut(200);
			}
        }

	  window.addEventListener('load', function(){
			menuHeight();
			adicionarAtivo();
			//mesmo tamanho
			$('.same-size').height( $('.same-size').height() );
			$("#loader").fadeOut(500);

	  });
	  window.addEventListener('scroll', function(e){
			mostrarIrTopo(e);
		});
		window.addEventListener('resize', function(){
			menuHeight()
		});


		$('#ir-topo, .smot').on('click', function (event) {
			var $anchor = $(this);

			$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000, 'swing');

			// Outras AnimaÃ§Ãµes
			// linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

	});
})($)