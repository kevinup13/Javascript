
function azul() {
    limpar();
    document.getElementById("titulo").classList.add('azul');
}
function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}
function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}
function limpar(){
    limpar();
}
function limpar(){
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
    document.getElementById("titulo").classList.remove('limpar');
}
// FOR LOOP
// FOR LOOP ARRAY

let texto = '';
for(let i = 1; i <= 50; i++) {
    texto = texto + i + ", ";
} 

document.getElementById("demo-1").innerHTML = texto;

let carros = ['Ferrari', 'fusca', 'palio', 'corola'];
let html ='<ul>';

for(let i in carros){
    html += '<li>'+ carros[i] +'</li>';
}
html += '<ul>';
document.getElementById("demo-2").innerHTML = html;

// while LOOP
let novo = '';
let c = 1;
while (c <= 10) {
    novo += "Número: "+c+"</br>";
    c++;
}
document.getElementById("demo-3").innerHTML = novo;

/* calcular imovel */
function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;
    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}
let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

/* validacao de senha */
/*
crie a função que valide usuário e senha
usuário correto: pedro
senha correta: 123
*/
//Uso da função:
function validar(usuario, senha){
    if(usuario === 'pedro' && senha === '123'){
        return true;
    } else {
        return false;
    }
}
let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}
