/*
Crie um array com 5 items (tipos variados).
*/
let myArray = [1, false, , "string", 3.2];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(){
    let updatedArray = myArray + "test";
    return updatedArray;
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
myArray = ["test2", 4.1, , false, 4];
console.log(myArray)
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArray[1]}.`)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${addItem().length} itens.`)
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' )
let num = 10;
while(num <= 20){
    if(num !== 10 && num % 2 === 0){
        console.log(num)
    }
    num+=2
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' )
let nums = 10;
while (nums <= 20){
    if(nums !== 10 && nums % 2 === 1){
        console.log(nums)
    }
    nums++
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números ímpares entre 100 e 120:' );
let numberToFor = 100;
for(numberToFor;numberToFor <= 120;numberToFor++){
    if(numberToFor % 2 === 1){
        console.log(numberToFor)
    }
}
let otherNumberToFor = 100;
console.log( 'Números ímpares entre 111 e 125:' );
for(otherNumberToFor;otherNumberToFor <= 125;otherNumberToFor++){
    if(otherNumberToFor !== 100 && otherNumberToFor % 2 === 1){
        console.log(otherNumberToFor)
    }
}
