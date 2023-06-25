const clientes = require('./cliente.json');

function find(list, key, value){
    return list.find((item) => item[key].includes(value));
}
const found = find(clientes, 'nome', 'Kirby');
console.log(found);
const found_2 = find(clientes, 'nome', 'Xylia');
console.log(found_2);
const found_3 = find(clientes, 'telefone', '9916828153');
console.log(found_3);
