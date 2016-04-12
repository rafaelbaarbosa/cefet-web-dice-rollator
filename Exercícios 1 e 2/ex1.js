var botoes = document.getElementsByTagName('button');
var i;

for(i = 0; i<botoes.length; i++){
	botoes[i].addEventListener('click', function(){
    	var pai = this.parentElement;
      if(pai.classList.contains('expandido')){
				pai.classList.remove('expandido');
      }else{
      	pai.classList.add('expandido');
      }
    });
}
