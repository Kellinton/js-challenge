// Fazendo a soma de uma lista/array com o método reduce

const numeros = [];

numeros.push(5);
numeros.push(7);
numeros.push(9);
numeros.push(1);
numeros.push(2);
numeros.push(10);

const somarNumeros = numeros.reduce((previous, current) => {
    return previous + current
})

console.log(somarNumeros);