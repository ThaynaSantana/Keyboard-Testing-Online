document.addEventListener('keydown', function(event) {
    var tecla = event.key.toUpperCase();
    let texto = document.getElementById('texto');
    let botoes = document.getElementsByClassName('botao');
    if(tecla == " "){
        tecla = "SPACE";
    }
    texto.innerHTML = 'Clicked: < '+ tecla+' >';
    for (var i = 0; i < botoes.length; i++) {
        var botao = botoes[i];
        
        if(tecla === botao.innerHTML){
            botao.style.color = 'red';
        }
    }
});