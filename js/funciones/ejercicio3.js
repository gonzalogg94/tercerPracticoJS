/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

function rectangulo(){
    let lado1=parseInt(prompt("ingresa el valor del primer lado"))
let lado2=parseInt(prompt("ingresa el valor del segundo lado"))
    document.write("El perimetro del rectagulo es: "+(2*(lado1+lado2)))
}
rectangulo()

