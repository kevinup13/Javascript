let dia = 5;

let diaNome = '';

switch(dia){
    case 1:
    diaNome = "Segunda-feira";
    break;
    case 2:
    diaNome = "Terça-feira";
    break;
    case 3:
    diaNome = "Quarta-feira";
    break;
    case 4:
    diaNome = "Quinta-feira";
    break;
    case 5:
    diaNome = "Sexta-feira";
    break;
    case 6:
    diaNome = "Sábado-feira";
    break;
    case 7:
    diaNome = "Domingo-feira";
    break;
}
document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;

function menu(){
    
}