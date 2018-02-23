(function($){
	// abrir menu no mobile
	var _t = 'Mamilos polemicos';
	console.log(_t);
	$('.menu').on('click', function(){
		console.log(_t);
		$('#desk-nav').slideToggle(200);
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
			$('#topo').addClass('redu');
		}
		return;
	}
	$('#banners').slick({
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false,
		nextArrow: '<img src="img/seta-right.png" class="seta-right" />"',
		prevArrow: '<img src="img/seta-left.png" class="seta-left" />"'
	  });

	  $('#cursos-todos').slick({
		dots: false,
		infinite: false,//Element
		appendArrows: $(".arrowsPlace"),
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '<img src="img/seta-cat-right.png" class="seta-right" />"',
		prevArrow: '<img src="img/seta-cat-left.png" class="seta-left" />"',
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
		});
		
		$('#carroucel').slick({
			dots: false,
			infinite: false,//Element
			appendArrows: $(".arrowsPlace"),
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: '<img src="img/seta-cat-right.png" class="seta-right" />"',
			prevArrow: '<img src="img/seta-cat-left.png" class="seta-left" />"'
			});
		
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
})($)