(function($){
	// abrir menu no mobile
	var _t = 'Mamilos polemicos';
	console.log(_t);
	$('.menu').on('click', function(){
		console.log(_t);
		$('#desk-nav').slideToggle()();
	});

})($)