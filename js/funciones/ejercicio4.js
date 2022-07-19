/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tabla(n){
    for(i=1;i<=10;i++){
        document.write("<br>"+n*i)
    }
}
tabla(5)