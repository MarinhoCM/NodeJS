const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somadasnotas = notasDaSala.reduce(
        (acc, notas) => {
            return acc + notas;
        }
    , 0);
        const media = somadasnotas / notasDaSala.length;
        return media
};
console.log(`MEDIA DA SALA DE JS: ${calculaMedia(salaJS)}`);
console.log(`MEDIA DA SALA DE JAVA: ${calculaMedia(salaJava)}`);
console.log(`MEDIA DA SALA DE PYTHOM: ${calculaMedia(salaPython)}`);
