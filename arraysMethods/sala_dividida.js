//Temos uma sala de aula com 20 estudantes, 
//representados por uma lista de strings:

const estudantes = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara',
    'Marjorie', 'Guilherme', 'Aline', 'Fabiana','Andre',
    'Carlos', 'Paulo', 'Bia','Vivian', 'Isabela',
    'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];
// (slice() == fatiar ) pode dividir um elemento 
// slice(args, args);
// pode fatiar tudo dentro de um intervalo passado como parâmetro
let sala1 = estudantes.slice(0, 10);
let sala2 = estudantes.slice(10);
console.log(`Na sala1 estão presentes [${sala1}]\n`)
console.log(`Na sala2 estão presentes [${sala2}]\n`)