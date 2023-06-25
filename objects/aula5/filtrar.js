const clientes = require('./cliente.json');

function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (// possuem apartamento mas não possuem complemento
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty('complemento')
        );
    });
};
console.log(filtrarApartamentosSemComplemento(clientes));