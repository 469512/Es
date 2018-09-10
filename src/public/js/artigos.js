"use strict";
(function($){
window.addEventListener("load", function(){
    $.get("https://blog.experienciadesucesso.com.br/wp-json/wp/v2/posts?_embed&per_page=3", function(retorno){
        artigos(retorno);
    });

    function artigos(data){
        data.forEach(function(el) {
            var data = new Date(el.date);
            var mes = data.getMonth() + 1;
            var dia = data.getDate();
            var meses = []; 
            meses[1]= "jan";
            meses[2]= "fev";
            meses[3]= "mar";
            meses[4]= "abr";
            meses[5]= "mai";
            meses[6]= "jun";
            meses[7]= "jul";
            meses[8]= "ago";
            meses[9]= "set";
            meses[10]= "out";
            meses[11]= "nov";
            meses[12]= "dez";
            //como fazer em:https://www.google.com.br/search?q=js+day+of+month&oq=js+day+o&aqs=chrome.3.69i57j0l5.4031j0j4&sourceid=chrome&ie=UTF-8
            
            var artigo = `
            <div class="col-xs-12 artigo-w #artigos-blog">
            <div class="row">
              <div class="col-md-4 artigo-foto col-sm-4 col-sm-push-8"><img class="img-responsive center-block" src="${el._embedded["wp:featuredmedia"] ? el._embedded["wp:featuredmedia"][0].source_url : "../img/artigo.png"}" alt="Artigo titulo" style="max-width: 284px;"></div>
              <div class="col-md-8 col-sm-8 col-sm-pull-4">
                <div class="row">
                  <div class="col-xs-4 col-md-2">
                    <div class="artigo-data">
                      <h4 class="text-oceano text-center"> <span class="dia">${dia}<br></span><span>${meses[mes]}</span></h4>
                    </div>
                  </div>
                  <div class="col-xs-8 col-md-10 artigo-textos">
                    <h4 class="text-left">${el.title.rendered}</h4>
                    <p class="text-left">${el.excerpt.rendered}</p>
                    <p class="text-left"><a href="${el.link}" target="_blanck" class="btn btn-default">Saiba Mais</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

          $("#artigos-blog").append(artigo);
        });
    }
});
})($)