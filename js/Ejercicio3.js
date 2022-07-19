/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
function aleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let listaResultados=[]
for(i=0;i<50;i++){
let dado1=aleatorio(1,6);
let dado2=aleatorio(1,6);
let suma=dado1+dado2;
listaResultados.push(suma)
}
document.write("<h3>La lista de resultados obtenidos por los dados son: </h3>")
document.write(listaResultados)