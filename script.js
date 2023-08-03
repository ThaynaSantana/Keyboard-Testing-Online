document.addEventListener('keydown', function(event) {
    var tecla = event.key.toUpperCase();
    let texto = document.getElementById('screen');
    let botoes = document.querySelectorAll('button');
    
    if(tecla == " "){
        tecla = "SPACE";
    } else if(tecla == "ESCAPE"){
        tecla = "ESC";
    } else if(tecla == "CAPSLOCK"){
        tecla = "CAPSLK";
    } else if(tecla == "BACKSPACE"){
        tecla = "BACK";
    } else if(tecla == "DELETE"){
        tecla = "DEL";
    } else if(tecla == "INSERT"){
        tecla = "INS";
    } else if(tecla == "META"){
        tecla = "WIN";
    } else if(tecla == "ALTGRAPH"){
        tecla = "ALTGR";
    } else if(tecla == "CONTROL"){
        tecla = "CTRL";
    }

    //Alterando o nome da tecla da seta para o nome do ID
    switch(tecla){
        case "ARROWUP":
            tecla = "up";
            break;
        case "ARROWDOWN":
            tecla = "down";
            break;
        case "ARROWLEFT":
            tecla = "left";
            break;
        case "ARROWRIGHT":
            tecla = "right";
            break;
    }
    // Alterando o texto do h2 id screen com nome da tecla pressionada
    texto.innerHTML = 'Clicked: < '+ tecla+' >';
    // Armazenando num array todos os botões pressionados
    for (var i = 0; i < botoes.length; i++) {
        var botao = botoes[i];
        // Alterando o estilo do botao qnd tecla igual ao value do botao
        if(tecla === botao.innerHTML || tecla === tecla.ID){
            Clicou(botao);
        }
    }
});

function Clicou(objeto){
    objeto.style.color = 'red';
}