/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function cadena(){
    let frase=prompt("ingrese una frase")
    if(frase==frase.toLowerCase()){
        document.write("la frase ingresa esta en miniscula")
    }else if(frase==frase.toUpperCase()){
        document.write("la frase ingresada esta en mayuscula")
    }else{
        document.write("la frase ingresada se encuentra en minisculas y mayusculas")
    }
}
cadena()