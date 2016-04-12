var servidorDasImagens = 'http://fegemo.github.io/cefet-web/images/',
    todasAsImagens = ['philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'];
        
var ant = document.getElementById('anterior');
var prox = document.getElementById('proximo');

ant.addEventListener('click', function(){
	var imgatual = document.getElementById('slide');
  var i;
  var url = 'http://fegemo.github.io/cefet-web/images/';
  
  for(i = 0; i<todasAsImagens.length; i++){
  	var aux = url + todasAsImagens[i];
  	if(imgatual.src === aux){
    	break;
    }
  }
  
  if(i === 0){
  	imgatual.src = url + todasAsImagens[todasAsImagens.length-1];
  } else{
  	imgatual.src = url + todasAsImagens[i-1];
  }
});

prox.addEventListener('click', function(){
	var imgatual = document.getElementById('slide');
  var i;
  var url = 'http://fegemo.github.io/cefet-web/images/';
  
  for(i = 0; i<todasAsImagens.length; i++){
  	var aux = url + todasAsImagens[i];
  	if(imgatual.src === aux){
    	break;
    }
  }
  
  if(i === (todasAsImagens.length-1)){
  	imgatual.src = url + todasAsImagens[0];
  } else{
  	imgatual.src = url + todasAsImagens[i+1];
  }
});


