const cliente = {
    nome: 'marin',
    idade: 19,
    email:'marinemail.com',
    telefone: [
        '11 888898989', '11 888898888'
    ],
};
// cliente.endereco = [{
//     rua: 'yara rocha',
//     numero: '1337',
//     apartamento: true,
//     complemento: 'ap 934'
// }];

const chavesdoobjeto = Object.keys(cliente); 
console.log(chavesdoobjeto);

if (!chavesdoobjeto.includes('endereco')) {
    console.error('ERROR. É necessário ter o endereço cadastrado.')
} 