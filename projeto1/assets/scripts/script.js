
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