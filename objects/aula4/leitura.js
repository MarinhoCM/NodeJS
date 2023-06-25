const dados = require('./cliente.json');
console.log(dados);
console.log(typeof dados); //object

const lutador = require('./lutador.json');
console.log(lutador);

const clienteString = JSON.stringify(dados); //transformando objeto para string
console.log(clienteString);
console.log(typeof clienteString); //string

// tranformando a string devolta para objeto

const objectoCliente = JSON.parse(clienteString);
console.log(objectoCliente);
console.log(typeof objectoCliente); //object