/* let carros = ['BW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1. ' + carros[x]);

let carros = ['BW', 'Ferrari', 'Mercedes'];
carros[1] = 'Audi';
let x = 1;
console.log('1. ' + carros[x]);

let carros = ['BW', 'Ferrari', 'Mercedes'];
carros.push('Volvo');
console.log('Itens no array: ');
console.log(carros.length); */

/* let personagem = {
    nome: 'kevin',
    idade: 28,
    pais: 'Brasil',
    forca: 100,
}
console.log(`${personagem.nome} tem ${personagem.forca} de força.`);
 */


/* let cores = ['preto', 'branco', 'azul', 'vermelho',];
 */

/* for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
} */


let cores = [
    { nome: 'preto', qt: 10 },
    { nome: 'branco', qt: 5 },
    { nome: 'azul', qt: 6 },
    { nome: 'vermelho', qt: 20 }
];
for (let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
    console.log(cores[i]);
};

/* for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
} */