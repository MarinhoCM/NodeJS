// acessano valores de um objeto
const cliente = {
    nome: 'andre',
    idade: 32,
    cpf: '11111123',
    email: 'adre@dominio.com'
}
console.log(cliente);
console.log(
    `nome do cliente: ${cliente.nome}\ne essa pessoa tem ${cliente.idade} anos.` 
);
console.log(`os tres primeiros digitos do cpf são: ${cliente.cpf.substring(0, 3)}`);
