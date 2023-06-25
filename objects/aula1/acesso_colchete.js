// acessano valores de um objeto com colchetes
const cliente = {
    nome: 'andre',
    idade: 32,
    cpf: '11111123',
    email: 'adre@dominio.com'
}
console.log(cliente);
console.log(
    `nome do cliente: ${cliente["nome"]}`,
    `e essa pessoa tem ${cliente['idade']} anos.` 
);
console.log(
    `os tres primeiros digitos do cpf são:`,
    ` ${cliente.cpf.substring(0, 3)}`
);

const chaves = ["nome", 'idade', 'cpf', 'email', 'altura'];

chaves.forEach((chave) => {
    console.log(
        `A chave ${chave} tem valor`,
        `${cliente[chave]}`
    );
});// retorna undefined quando a propiedade não existe