
function verde (){
    limparVerde();
    lineUm();
    document.querySelector('#containerVerde').classList.add('verde');
};
function vermelho (){
    limparVermelho();
    lineDois();
    document.querySelector('#containerVermelho').classList.add('vermelho');   
};
function azul (){
    limparAzul();
    lineTres();
    document.querySelector('#containerAzul').classList.add('azul');   
};
function limparVerde(){
    document.querySelector("#containerVerde").classList.remove('verde');
    document.querySelector(".lineUm").classList.remove("line-01") 
};
function limparVermelho(){
    document.querySelector("#containerVermelho").classList.remove('vermelho');
    document.querySelector(".lineDois").classList.remove("line-02")   
};
function limparAzul(){
    document.querySelector("#containerAzul").classList.remove('azul');
    document.querySelector(".lineTres").classList.remove("line-03")
}
/* Essa função faz a troca de imagens através do atributo */
function trocarImagem(filename){
    document.querySelector('.imagem').setAttribute('src', filename);
}
/* essa função muda a cor da line */
function lineUm(){
    document.querySelector(".lineUm").classList.add("line-01");
}
function lineDois(){
    document.querySelector(".lineDois").classList.add("line-02");
}
function lineTres(){
    document.querySelector(".lineTres").classList.add("line-03");
}