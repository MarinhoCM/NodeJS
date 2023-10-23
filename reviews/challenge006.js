// var championship = 'Campeonato Paulista';
// console.log(championship);

// let teams = ["São Paulo", "Paumeiras", "Santos", "Corithians", "Ponte Preta"];
// console.log(teams)


// function showTeamPosition(position){
//     if(position < 1 || position > 5){
//         return "Não temos informação do time que está nessa posição."
//     } else {
//         return `O time que esta em ${position} lugar é o ${teams[position + 1]}.`
//     }
// };

// console.log(showTeamPosition(0))
// console.log(showTeamPosition(1))
// console.log(showTeamPosition(2))
// console.log(showTeamPosition(3))
// console.log(showTeamPosition(4))
// console.log(showTeamPosition(5))
// console.log(showTeamPosition(6))

// let num = 20;

// while(num <= 30){
//     console.log(num++);
// }


function convertToHex(color){
    switch(color) {
        case 'red':
            return `O hexadecimal para a cor: ${color} é #FF0000.`;
        case 'blue':
            return `O hexadecimal para a cor: ${color} é #0000FF.`;
        case 'green':
            return `O hexadecimal para a cor: ${color} é #00FF00`;
        case 'black':
            return `O hexadecimal para a cor: ${color} é #000000.`;
        case 'white':
            return `O hexadecimal para a cor: ${color} é #FFFFFF.`;
        default:
            return `Não temos o equivalente hexadecimal para ${color}.`;
    }
}
console.log(convertToHex("red"))
console.log(convertToHex("blue"))
console.log(convertToHex("green"))
console.log(convertToHex("black"))
console.log(convertToHex("white"))
console.log(convertToHex("gray"))
