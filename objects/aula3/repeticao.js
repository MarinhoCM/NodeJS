const cliente = {
    nome: 'marin',
    idade: 19,
    email:'marinemail.com',
    telefone: [
        '11 888898989', '11 888898888'
    ],
};
cliente.endereco = [{
    rua: 'yara rocha',
    numero: '1337',
    apartamento: true,
    complemento: 'ap 934'
}];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
    // console.log(cliente[chave]);
    // console.log(chave); // retorna as chaves do objeto
};