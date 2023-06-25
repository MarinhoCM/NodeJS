const nomes = [
    'evaldo', 'marin', 'camis', 'vi'
]
// nomes.forEach(function (nome){
//     console.log(nome);
// }) 

// nomes.forEach((nome) => {
//     console.log(nome);
// })// arrow function

function imprimenome(name){
    console.log(name);
}
nomes.forEach(imprimenome);//sem parenteses
