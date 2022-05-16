/*
Disciplina: LINGUAGENS DE SCRIPT PARA WEB 
Autor: Ingrid Santos
Data: 11/05/2022
Objetivo: Calcular a média das notas dos alunos
*/


let notas = [8,9,10,10];

console.log(calculoMedia(notas));


function calculoMedia(notas) {
let media =((notas[0]*0.1)+(notas[1]*0.2)+(notas[2]*0.3)+(notas[3]* 0.4));


return(media);
}
