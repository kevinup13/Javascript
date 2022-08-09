
function verde (){
    limparVerde();
    document.querySelector('#containerVerde').classList.add('verde')    
};
function vermelho (){
    limparVermelho();
    document.querySelector('#containerVermelho').classList.add('vermelho')   
};
function azul (){
    limparAzul();
    document.querySelector('#containerAzul').classList.add('azul')   
};
function limparVerde(){
    document.querySelector("#containerVerde").classList.remove('verde');  
}
function limparVermelho(){
    document.querySelector("#containerVermelho").classList.remove('vermelho');   
}
function limparAzul(){
    document.querySelector("#containerAzul").classList.remove('azul');
}