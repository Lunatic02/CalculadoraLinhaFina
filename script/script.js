const maior = document.querySelector('#x');
const menor = document.querySelector('#y');

const resultados = document.querySelector('span');

function somar(){
     const valorMaior = 275/(maior.value + 1);
     const valorMenor = 185/(menor.value + 1);
     const valorTotal = (valorMenor * valorMaior)
     const divisao = (60/valorTotal);
     resultados.innerHTML = divisao / 100;
}
