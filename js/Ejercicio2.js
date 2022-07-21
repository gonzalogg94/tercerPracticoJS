/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let ciudades=[]
do{
ciudades.push(prompt("ingrese una ciudad"));
} while(confirm("¿Desea seguir?"));
document.write("las ciudades ingresadas son: "+ciudades)
let longitud=ciudades.length
document.write("<br> Longitud del array: " + longitud)
document.write("<br> La primera ciudad ingresada es: " + ciudades[0]);
document.write("<br> La tercera ciudad ingresada es : " + ciudades[2]);
document.write("<br> La ultima ciudad ingresada es : "+ciudades[String (longitud-1)]);
ciudades.push('paris');
document.write("<br> Nueva lista de ciudades:"+ciudades)
document.write("<br> El elemento que ocupa la segunda posicion es: " + ciudades[1]);
ciudades.splice(1,0,"barcelona");
document.write("<br> Nueva lista de ciudades es:"+ciudades)





